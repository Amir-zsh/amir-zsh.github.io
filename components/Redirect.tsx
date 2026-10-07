import Head from 'next/head'

// The site used to have one page per section; these keep the old URLs working.
export function redirectTo(anchor: string) {
  return function Redirect() {
    const url = `/#${anchor}`
    return (
      <Head>
        <meta httpEquiv="refresh" content={`0; url=${url}`} />
        <link rel="canonical" href={`https://amir-zsh.github.io${url}`} />
      </Head>
    )
  }
}
