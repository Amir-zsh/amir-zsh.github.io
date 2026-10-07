import { useEffect, useRef, useState } from 'react'
import { about, publications } from '../data'
import type { Publication } from '../types'
import { Section } from './Layout'

// Author list with my name in bold.
function Authors({ text }: { text: string }) {
  const parts = text.split(about.name)
  return (
    <p className="pub-authors">
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && <strong>{about.name}</strong>}
        </span>
      ))}
    </p>
  )
}

// "Conference on Language Modeling (COLM)" + 2026 → "COLM 2026"
function shortVenue(pub: Publication) {
  if (pub.status === 'under-review') return 'Under review'
  const acronym = pub.venue.match(/\(([^)]+)\)/)?.[1]
  if (acronym) return `${acronym} ${pub.year}`
  return pub.venue.includes(pub.year) ? pub.venue : `${pub.venue} ${pub.year}`
}

export function Publications() {
  const [open, setOpen] = useState<Set<string>>(new Set())
  const [figure, setFigure] = useState<Publication | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (figure) dialog.current?.showModal()
  }, [figure])

  const toggle = (title: string) =>
    setOpen(prev => {
      const next = new Set(prev)
      next.has(title) ? next.delete(title) : next.add(title)
      return next
    })

  return (
    <Section id="publications" title="Publications" aside="* equal contribution">
      <ol className="pubs">
        {publications.map((pub, i) => {
          const isOpen = open.has(pub.title)
          const summaryId = `summary-${i}`
          return (
            <li key={pub.title} className="pub">
              <h3 className="pub-title">
                {pub.links?.pdf ? <a href={pub.links.pdf}>{pub.title}</a> : pub.title}
              </h3>
              <Authors text={pub.authors} />
              <div className="pub-meta">
                <em className="venue" title={pub.venue}>{shortVenue(pub)}</em>
                {pub.description && (
                  <button type="button" onClick={() => toggle(pub.title)} aria-expanded={isOpen} aria-controls={summaryId}>
                    {isOpen ? 'Hide summary' : 'Summary'}
                  </button>
                )}
                {pub.links?.pdf && <a href={pub.links.pdf}>Paper</a>}
                {pub.links?.code && <a href={pub.links.code}>Code</a>}
              </div>
              {isOpen && (
                <div className="pub-summary" id={summaryId}>
                  <p>{pub.description}</p>
                  {pub.figureSrc && (
                    <button type="button" className="thumb" onClick={() => setFigure(pub)} aria-label={`Enlarge figure for ${pub.title}`}>
                      <img src={pub.figureSrc} alt="" loading="lazy" />
                    </button>
                  )}
                </div>
              )}
            </li>
          )
        })}
      </ol>

      <dialog ref={dialog} className="fig-dialog" onClose={() => setFigure(null)} onClick={() => dialog.current?.close()}>
        {figure && (
          <figure>
            <img src={figure.figureSrc} alt={`Figure from ${figure.title}`} />
            <figcaption>{figure.title}</figcaption>
          </figure>
        )}
      </dialog>
    </Section>
  )
}
