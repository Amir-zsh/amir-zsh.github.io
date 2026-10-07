import { Fragment } from 'react'
import Head from 'next/head'
import type { GetStaticProps } from 'next'
import { about, education, experience, teaching, reviewing, projects } from '../data'
import { Footer, Section, TopBar } from '../components/Layout'
import { Publications } from '../components/Publications'
import { SpecDecode } from '../components/SpecDecode'

type Props = { year: string }

// Computed at build time so the static HTML and hydration agree.
export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { year: String(new Date().getUTCFullYear()) },
})

// "Aug 2021 – Present" → "2021 – Present", "May 2022 – Aug 2022" → "2022"
function years(time: string) {
  const [start, end] = time.replace(/\s*\(Expected\)/, '').split('–').map(s => s.trim())
  const y0 = start.match(/\d{4}/)?.[0]
  const y1 = /present/i.test(end ?? '') ? 'Present' : end?.match(/\d{4}/)?.[0]
  return !y1 || y0 === y1 ? y0 : `${y0} – ${y1}`
}

function splitAdvisor(org: string) {
  const m = org.match(/\s*\(Advisor:\s*([^)]+)\)/)
  return m ? { org: org.replace(m[0], ''), advisor: m[1] } : { org, advisor: undefined }
}

// "Course — Role; Place" lines: course on the left, role and place on the right.
function RoleList({ items }: { items: string[] }) {
  return (
    <ul className="list">
      {items.map(line => {
        const [item, rest = ''] = line.split(' — ')
        const [role, place] = rest.split('; ')
        return (
          <li key={line}>
            <span>{item}</span>
            <span className="list-meta">{role}{place ? `, ${place}` : ''}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default function Home({ year }: Props) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: about.name,
    url: 'https://amir-zsh.github.io',
    jobTitle: about.title,
    affiliation: { '@type': 'Organization', name: about.affiliation },
    email: about.email,
    sameAs: [about.github],
    alumniOf: education.slice(1).map(e => ({ '@type': 'CollegeOrUniversity', name: e.school })),
    knowsAbout: about.interests,
  }
  const title = `${about.name} - ${about.title}`
  const description = `${about.name}, ${about.title} at ${about.affiliation}. Research in LLM efficiency, speculative decoding, and edge training.`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${about.name}, ${about.interests.join(', ')}, computer science, machine learning, LLM`} />
        <meta name="author" content={about.name} />
        <meta name="google-site-verification" content="rwGRh8F4er99vkE4yx-E7y3r8yRt38rOZtHwmfW05OA" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={`${about.name}, ${about.title} at ${about.affiliation}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amir-zsh.github.io" />
        <meta property="og:image" content={`https://amir-zsh.github.io${about.avatar}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={`${about.name}, ${about.title} at ${about.affiliation}`} />
        <link rel="canonical" href="https://amir-zsh.github.io" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <TopBar />

      <div className="page">
        <header id="top" className="hero">
          <div className="hero-text">
            <h1>{about.name}</h1>
            <p className="hero-role">
              {about.title}
              <br />
              {about.affiliation}
            </p>
            <SpecDecode />
            <p className="hero-links">
              <a href={`mailto:${about.email}`}>{about.email}</a>
              <a href={about.github}>GitHub</a>
              {about.cv && <a href={about.cv}>CV</a>}
            </p>
          </div>
          <img className="hero-photo" src={about.avatar} alt={`Portrait of ${about.name}`} />
        </header>

        <main id="content">
          <Section id="about" title="About">
            <p className="about-text">{about.bio}</p>
            <p className="interests">
              <em>Interests:</em> {about.interests.join(', ')}.
            </p>
          </Section>

          <Publications />

          <Section id="experience" title="Experience">
            <ul className="timeline">
              {experience.map(item => {
                const { org, advisor } = splitAdvisor(item.org)
                return (
                  <li key={item.role + item.time}>
                    <div className="tl-head">
                      <h3>{item.role}</h3>
                      <span className="tl-when">{years(item.time)}</span>
                    </div>
                    <p className="tl-org">{org} · {item.place}{advisor && <> · Advisor: {advisor}</>}</p>
                    <ul className="tl-bullets">{item.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                  </li>
                )
              })}
            </ul>
          </Section>

          <Section id="education" title="Education">
            <ul className="timeline">
              {education.map(item => (
                <li key={item.school}>
                  <div className="tl-head">
                    <h3>{item.degree}</h3>
                    <span className="tl-when">{years(item.time)}{/Expected/.test(item.time) && ' (expected)'}</span>
                  </div>
                  <p className="tl-org">{item.school} · {item.place}{item.gpa && <> · GPA {item.gpa}</>}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="teaching" title="Teaching">
            <RoleList items={teaching} />
          </Section>

          <Section id="reviewing" title="Reviewing">
            <ul className="reviewing">
              <li>
                {reviewing.conferences.map((c, i) => (
                  <Fragment key={c.name}>
                    {i > 0 && ', '}
                    {c.name}
                    {c.award && <> <span className="award">({c.award})</span></>}
                  </Fragment>
                ))}
              </li>
              <li>
                {reviewing.workshops.map((w, i) => (
                  <Fragment key={w.name}>
                    {i > 0 && ', '}
                    {w.name} <span className="at">@{w.venue}</span>
                  </Fragment>
                ))}
              </li>
            </ul>
          </Section>

          <Section id="projects" title="Other Projects">
            <ul className="projects">
              {projects.map(p => (
                <li key={p.name}>
                  <strong>{p.name}.</strong> {p.desc} <span className="stack">({p.stack.join(', ')})</span>
                </li>
              ))}
            </ul>
          </Section>

          {about.skills && (
            <Section id="skills" title="Skills">
              <dl className="skills">
                {Object.entries(about.skills).map(([group, items]) => (
                  <div key={group}>
                    <dt>{group}</dt>
                    <dd>{items.join(', ')}</dd>
                  </div>
                ))}
              </dl>
            </Section>
          )}
        </main>

        <Footer year={year} />
      </div>
    </>
  )
}
