import React from 'react';
import SuperDocument, { Head, Html, Main, NextScript } from 'next/document';

export default class Document extends SuperDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-127707652-1"
          />
          {/*<script>*/}
          {/*    window.dataLayer = window.dataLayer || [];*/}
          {/*    function gtag(){dataLayer.push(arguments);}*/}
          {/*    gtag('js', new Date());*/}

          {/*    gtag('config', 'UA-127707652-1');*/}
          {/*</script>*/}
          {/* End of Global site tag (gtag.js) - Google Analytics */}

          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="{{ $metaDescription }}" />

          <link
            href="https://fonts.googleapis.com/earlyaccess/notosanskr.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Poiret+One"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          />

          {/* Favicons */}
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/assets/images/favicons/Grotesq-favicon-57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/assets/images/favicons/Grotesq-favicon-60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/assets/images/favicons/Grotesq-favicon-72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/assets/images/favicons/Grotesq-favicon-76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/assets/images/favicons/Grotesq-favicon-114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/assets/images/favicons/Grotesq-favicon-120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/assets/images/favicons/Grotesq-favicon-144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/assets/images/favicons/Grotesq-favicon-152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/images/favicons/Grotesq-favicon-180.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/assets/images/favicons/Grotesq-favicon-192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/images/favicons/Grotesq-favicon-32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/assets/images/favicons/Grotesq-favicon-96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/images/favicons/Grotesq-favicon-16.png"
          />
          <link rel="stylesheet" href="/assets/css/main.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
