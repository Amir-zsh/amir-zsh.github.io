import Head from 'next/head'
import { Layout } from '../components/layout/Layout'
import { ExperiencePage } from '../components/pages'
import { about } from '../data'

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience - {about.name}</title>
        <meta name="description" content={`Professional experience of ${about.name}, ${about.title} at ${about.affiliation}`} />
        <link rel="canonical" href="https://amir-zsh.github.io/experience" />
      </Head>
      
      <Layout currentPage="/experience" pageTitle="experience.md">
        <ExperiencePage />
      </Layout>
    </>
  )
}
