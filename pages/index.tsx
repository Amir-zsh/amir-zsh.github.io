import Head from 'next/head'
import AmirAcademicSite from '../components/AmirAcademicSite'
import { about, publications } from '../data'

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": about.name,
    "url": "https://amir-zsh.github.io",
    "jobTitle": about.title,
    "affiliation": {
      "@type": "Organization",
      "name": about.affiliation
    },
    "email": about.email,
    "sameAs": [
      about.github
    ],
    "alumniOf": "University of Southern California",
    "knowsAbout": about.interests
  };

  return (
    <>
      <Head>
        <title>{about.name} - {about.title}</title>
        <meta name="description" content={`${about.name}, ${about.title} at ${about.affiliation}. Research in LLM efficiency, speculative decoding, and edge training.`} />
        <meta name="keywords" content={`${about.name}, ${about.interests.join(', ')}, computer science, machine learning, LLM`} />
        <meta name="author" content={about.name} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${about.name} - ${about.title}`} />
        <meta property="og:description" content={`${about.name}, ${about.title} at ${about.affiliation}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amir-zsh.github.io" />
        {about.avatar && <meta property="og:image" content={`https://amir-zsh.github.io${about.avatar}`} />}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${about.name} - ${about.title}`} />
        <meta name="twitter:description" content={`${about.name}, ${about.title} at ${about.affiliation}`} />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://amir-zsh.github.io" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <AmirAcademicSite />
    </>
  )
}
