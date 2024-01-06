import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="X-UA-Compatible" content="text/html; charset=UTF-8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no" />
        <meta name="description" content="The Wedding of Najib &amp; Selvia" />
        <meta property="og:site_name" content="najib-selvia.my.id" />
        <meta property="og:title" content="The Wedding of Najib &amp; Selvia" />
        <meta property="og:description" content="Minggu, 18 Februari 2023" />
        <meta property="og:url" content="https://najib-selvia.my.id" />
        <meta property="og:image" content="https://najib-selvia.my.id/static/images/meta-img.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="The Wedding of Najib &amp; Selvia" />
        <meta name="twitter:image:src" content="https://najib-selvia.my.id/static/images/meta-img.jpg" />

        <meta property="og:updated_time" content="1682008998" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
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