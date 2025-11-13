import Head from 'next/head'
import { Layout } from '../components/layout/Layout'
import { TeachingPage } from '../components/pages'
import { about } from '../data'

export default function Teaching() {
  return (
    <>
      <Head>
        <title>{`Teaching - ${about.name}`}</title>
        <meta name="description" content={`Teaching and community involvement by ${about.name}`} />
        <link rel="canonical" href="https://amir-zsh.github.io/teaching" />
      </Head>
      
      <Layout currentPage="/teaching" pageTitle="teaching.md">
        <TeachingPage />
      </Layout>
    </>
  )
}
