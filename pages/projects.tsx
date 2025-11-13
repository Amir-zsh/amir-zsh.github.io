import Head from 'next/head'
import { Layout } from '../components/layout/Layout'
import { ProjectsPage } from '../components/pages'
import { about } from '../data'

export default function Projects() {
  return (
    <>
      <Head>
        <title>{`Projects - ${about.name}`}</title>
        <meta name="description" content={`Research and software projects by ${about.name}`} />
        <link rel="canonical" href="https://amir-zsh.github.io/projects" />
      </Head>
      
      <Layout currentPage="/projects" pageTitle="projects.md">
        <ProjectsPage />
      </Layout>
    </>
  )
}
