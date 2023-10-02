import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="google-site-verification" content="k3tJdfiBldsZfpiY7RMzcbVcvH9IMILJFw037MgxaT4" />
        <meta name="description" content={'Web portfolio Jihan Lugas'} />
        <meta name="keywords" content="jihan lugas, jihan, programmer, portfolio, personal website, personal portfolio" />
        <meta name="author" content="Jihan Lugas" />
        <meta property="og:image" itemProp="image" content="https://jihanlugas.id/favicon-192x192.png" />
        {/* <meta property="og:site_name" content="San Roque 2014 Pollos" /> */}
        {/* <meta property="og:title" content="San Roque 2014 Pollos" /> */}
        {/* <meta property="og:description" content="Programa de fiestas" /> */}
        {/* <meta property="og:type" content="website" /> */}
        {/* <meta property="og:updated_time" content="1440432930" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
