import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Trirong" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Work+Sans" />
        <link rel="shortcut icon" href="/static/images/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}