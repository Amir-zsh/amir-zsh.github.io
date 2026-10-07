import { Html, Head, Main, NextScript } from 'next/document'

// Runs before first paint so a saved theme doesn't flash.
const bootScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')d.setAttribute('data-theme',t)}catch(e){}})();`

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
