import { Fragment, KeyboardEvent, useEffect, useRef, useState } from 'react'

// Easter egg. The tagline reads as plain text: "I work on <topic>, <completion>".
// The topic is secretly an unverified draft token and the visitor is the
// verifier. A faint dotted underline, a blinking caret, and a one-time flicker
// hint that something is going on.
//
// Clicking the topic shows the target distribution over topics, the current one
// included, while the topic and everything after it (which depends on it) turn
// back into drafts. Picking the current topic accepts it. Picking another
// rejects it: the topic and everything after it are struck out and discarded, as
// speculative decoding discards the rest of a draft block after the first
// rejection. The picked topic is then resampled in and the page drafts a new
// completion, which includes its own small rejected draft saying what I
// *don't* work on.

type State = 'draft' | 'ok' | 'bad' | 'gone' | 'fix'
type Tok = { id: number; text: string; s: State; slow?: boolean }

type Line = {
  topic: string
  p: number             // "target model" probability shown when resampling
  prefix: string        // accepted part of the first draft block
  rejected: string      // first token the target model rejects
  discarded: string     // rest of the first draft block, thrown away
  resampled: string     // the target model's own token
  continuation: string  // second draft block, fully accepted
}

const LINES: Line[] = [
  {
    topic: 'large language models', p: 0.34,
    prefix: ', mostly on', rejected: ' scaling', discarded: ' them up',
    resampled: ' making', continuation: ' them faster and cheaper to run.',
  },
  {
    topic: 'federated learning', p: 0.22,
    prefix: ', training models', rejected: ' in', discarded: ' one datacenter',
    resampled: ' where', continuation: ' the data already lives.',
  },
  {
    topic: 'private machine learning', p: 0.18,
    prefix: ', learning from data that', rejected: ' is', discarded: ' anonymized first',
    resampled: ' stays', continuation: ' secret-shared the whole time.',
  },
  {
    topic: 'on-device fine-tuning', p: 0.16,
    prefix: ', adapting language models on', rejected: ' GPU', discarded: ' clusters',
    resampled: ' phones', continuation: ', without backpropagation.',
  },
  {
    topic: 'diffusion models', p: 0.10,
    prefix: ', generating images', rejected: ' pixel', discarded: ' by pixel',
    resampled: ' in', continuation: ' the frequency domain, from coarse structure to fine detail.',
  },
]

const PROMPT = 'I work on '

const DRAFT_MS = 55
const VERIFY_MS = 60
const PAUSE_MS = 300
const REJECT_MS = 950 // keep in sync with the .tok-bad / .tok-gone fade
const SETTLE_MS = 600
// The wrong draft is the point of the demo ("not pixel by pixel"), so give people
// time to read it before verification, and to see it struck out before it fades.
const READ_DRAFT_MS = 750
const READ_REJECT_MS = 1600 // keep in sync with the .tok-slow animation
const STATUS_LINGER_MS = 3500
const FLICKER_AT_MS = 2600
const FLICKER_MS = 700

// Split into word-ish tokens that keep their leading space; punctuation stands alone.
const split = (s: string) => s.match(/\s*[^\s,.:;]+|[,.:;]/g) ?? []

const completion = (l: Line) => l.prefix + l.resampled + l.continuation
const fullText = (l: Line) => PROMPT + l.topic + completion(l)

function tokensFor(line: Line) {
  let id = 0
  const make = (s: string, state: State = 'draft') => split(s).map(text => ({ id: id++, text, s: state }))
  return {
    prefix: make(line.prefix),
    rejected: make(line.rejected),
    discarded: make(line.discarded),
    resampled: make(line.resampled, 'fix'),
    continuation: make(line.continuation),
  }
}

const finalTokens = (line: Line): Tok[] => {
  const t = tokensFor(line)
  return [...t.prefix, ...t.resampled, ...t.continuation].map(x => ({ ...x, s: 'ok' }))
}

// Each step may also update the status line that quietly narrates the decoding.
type Step = [delay: number, update: (t: Tok[]) => Tok[], status?: string]

const setState = (ids: number[], s: State) => (t: Tok[]) => t.map(x => (ids.includes(x.id) ? { ...x, s } : x))
const ids = (ts: Tok[]) => ts.map(t => t.id)

function buildSteps(line: Line): Step[] {
  const t = tokensFor(line)
  const steps: Step[] = []
  const drafted = t.prefix.length + t.rejected.length + t.discarded.length + t.continuation.length
  const accepted = t.prefix.length + t.continuation.length
  const wrong = (line.rejected + line.discarded).trim()

  // Draft block 1: runs past the eventual mismatch.
  ;[...t.prefix, ...t.rejected, ...t.discarded].forEach((x, i) =>
    steps.push([DRAFT_MS, ts => [...ts, x], i === 0 ? 'drafting…' : undefined]))
  steps.push([READ_DRAFT_MS, ts => ts, 'verifying…'])

  // Verify: accept the prefix, reject the first mismatch, throw away the rest of the block.
  for (const x of t.prefix) steps.push([VERIFY_MS, setState([x.id], 'ok')])
  const slow = (ts: Tok[]) => ts.map(x => (x.s === 'bad' || x.s === 'gone' ? { ...x, slow: true } : x))
  steps.push([VERIFY_MS, ts => slow(setState(ids(t.discarded), 'gone')(setState(ids(t.rejected), 'bad')(ts))),
    `rejected “${wrong}” · resampling…`])
  steps.push([READ_REJECT_MS, ts => [...ts.filter(x => x.s !== 'bad' && x.s !== 'gone'), ...t.resampled]])

  // Draft block 2 from the corrected position, then verify it.
  t.continuation.forEach((x, i) => steps.push([i === 0 ? PAUSE_MS : DRAFT_MS, ts => [...ts, x], i === 0 ? 'drafting…' : undefined]))
  steps.push([PAUSE_MS, ts => ts, 'verifying…'])
  for (const x of t.continuation) steps.push([VERIFY_MS, setState([x.id], 'ok')])

  // The resampled token keeps a hint of color for a moment, then settles to ink.
  steps.push([SETTLE_MS, setState(ids(t.resampled), 'ok'), `speculative decoding · ${accepted}/${drafted} draft tokens accepted`])
  return steps
}

type Phase = 'idle' | 'verify' | 'rejected'

export function SpecDecode() {
  const [index, setIndex] = useState(0)
  const [tokens, setTokens] = useState<Tok[]>(() => finalTokens(LINES[0]))
  const [topicState, setTopicState] = useState<State>('ok')
  const [phase, setPhase] = useState<Phase>('idle')
  const [decoding, setDecoding] = useState(false)
  const [status, setStatusText] = useState('')
  const [statusOn, setStatusOn] = useState(false)
  const timers = useRef<number[]>([])
  const panel = useRef<HTMLDivElement>(null)
  const line = LINES[index]

  // Keep the last text while it fades out, so it doesn't vanish mid-transition.
  const setStatus = (text: string | null) => {
    if (text) setStatusText(text)
    setStatusOn(Boolean(text))
  }

  const clearTimers = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }
  const later = (ms: number, fn: () => void) => timers.current.push(window.setTimeout(fn, ms))

  const decode = (l: Line, startAt: number) => {
    setTokens([])
    setDecoding(true)
    let at = startAt
    for (const [delay, update, note] of buildSteps(l)) {
      at += delay
      later(at, () => {
        setTokens(update)
        if (note) setStatus(note)
      })
    }
    // A resampled topic stays tinted until its completion is verified.
    later(at, () => {
      setTopicState('ok')
      setDecoding(false)
    })
    later(at + STATUS_LINGER_MS, () => setStatus(null))
  }

  // Lure: once, shortly after load, the topic flickers back to draft gray as if unsure of itself.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    later(FLICKER_AT_MS, () => setTopicState(s => (s === 'ok' ? 'draft' : s)))
    later(FLICKER_AT_MS + FLICKER_MS, () => setTopicState(s => (s === 'draft' ? 'ok' : s)))
    return clearTimers
  }, [])

  useEffect(() => {
    if (phase === 'verify') panel.current?.querySelector<HTMLButtonElement>('[aria-current="true"]')?.focus()
  }, [phase])

  // Clicking the topic doesn't reject it; it asks the visitor to verify it.
  const openVerify = () => {
    if (decoding || phase === 'rejected') return
    if (phase === 'verify') return accept()
    clearTimers()
    setStatus(null)
    setPhase('verify')
    setTopicState('draft')
    setTokens(ts => ts.map(t => ({ ...t, s: 'draft' })))
  }

  const accept = () => {
    setPhase('idle')
    setTopicState('ok')
    setTokens(ts => ts.map(t => ({ ...t, s: 'ok' })))
  }

  const choose = (i: number) => {
    if (i === index) return accept()
    // Rejected: strike the topic and everything drafted after it, let them fade, then resample.
    setPhase('rejected')
    setTopicState('bad')
    setTokens(ts => ts.map(t => ({ ...t, s: 'gone' })))
    later(REJECT_MS, () => {
      setIndex(i)
      setTopicState('fix')
      setPhase('idle')
      decode(LINES[i], 150)
    })
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && phase === 'verify') accept()
  }

  const options = LINES.map((l, i) => ({ ...l, i })).sort((x, y) => y.p - x.p)

  return (
    // While the easter egg runs, the generated text (topic + completion) shows its token boundaries.
    <div className={`spec${decoding || phase !== 'idle' ? ' show-tokens' : ''}`} onKeyDown={onKeyDown}>
      <p className="spec-line">
        {/* Invisible copy of the final sentence reserves the layout so nothing below jumps. */}
        <span className="spec-ghost" aria-hidden>{fullText(line)}</span>
        <span className="spec-live">
          {PROMPT}
          {phase === 'rejected' ? (
            <span className="spec-topic tok tok-bad tk4">{line.topic}</span>
          ) : (
            <button
              type="button"
              className={`spec-topic tok tok-${topicState} tk4`}
              onClick={openVerify}
              title="This token is only a draft. Verify it?"
              aria-label={`${line.topic}. This is a draft token; verify it`}
              aria-expanded={phase === 'verify'}
            >
              {line.topic}
            </button>
          )}
          <span aria-hidden>
            {tokens.map(t => {
              // Keep the leading space outside the span so the strike-through hugs the word.
              const word = t.text.trimStart()
              return (
                <Fragment key={`${index}-${t.id}`}>
                  {t.text.slice(0, t.text.length - word.length)}
                  {/* tk0–tk3 alternate along the completion; the topic always uses tk4. */}
                  <span className={`tok tok-${t.s}${t.slow ? ' tok-slow' : ''} tk${t.id % 4}`}>{word}</span>
                </Fragment>
              )
            })}
          </span>
          <span className="spec-caret" aria-hidden />
          {phase === 'idle' && !decoding && <span className="sr-only" aria-live="polite">{completion(line)}</span>}
        </span>
      </p>

      {/* Status narrates only while (and briefly after) the easter egg runs; empty otherwise. */}
      {phase === 'idle' && (
        <p className={`spec-status${statusOn ? ' is-on' : ''}`} aria-hidden>{status}</p>
      )}

      {phase !== 'idle' && (
        <div className="spec-panel" ref={panel} role="group" aria-label="Verify the topic">
          <span className="spec-panel-label">verify</span>
          {options.map(o => (
            <button
              key={o.topic}
              type="button"
              aria-current={o.i === index}
              disabled={phase === 'rejected'}
              onClick={() => choose(o.i)}
            >
              {o.topic}
              <span className="spec-p">{o.p.toFixed(2)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
