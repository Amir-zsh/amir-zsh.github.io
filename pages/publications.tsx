import Head from 'next/head'
import { Layout } from '../components/layout/Layout'
import { PublicationsPage } from '../components/pages'
import { about } from '../data'

export default function Publications() {
  return (
    <>
      <Head>
        <title>Publications - {about.name}</title>
        <meta name="description" content={`Research publications by ${about.name}, ${about.title} at ${about.affiliation}`} />
        <link rel="canonical" href="https://amir-zsh.github.io/publications" />
      </Head>
      
      <Layout currentPage="/publications" pageTitle="publications.md">
        <PublicationsPage />
      </Layout>
    </>
  )
}
