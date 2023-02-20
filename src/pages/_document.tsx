import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Script from "next/script";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
      return (
        <Html lang="ko">
          <Head>
            <meta charSet="utf-8" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="그로테스큐 || GrotesQ" />
            <meta property="og:locale" content="ko_KR" />
            <meta property="og:site_name" content="그로테스큐 || GrotesQ" />
            <meta
              property="og:description"
              content="그로테스큐에서는 기획, 디자인부터 앱, 플랫폼 서비스 런칭까지 도와드립니다.
              가지고 계신 아이디어를 전문적인 컨설팅을 통해 구체화시켜드립니다.
              어려운 전문용어를 이해하지 못할까 봐 걱정하지 마세요. 비전문가도 쉽게 이해할 수 있는 컨설팅을 진행합니다.
              효과적인 제작 과정을 통하여 안정성&접근성 높은 결과물을 제작합니다."
            />
            <meta property="og:url" content="https://www.grotesq.com"></meta>
            <meta property="og:image" content="https://www.grotesq.com/assets/images/social.png" />
            <meta
              name="description"
              content="그로테스큐에서는 기획, 디자인부터 앱, 플랫폼 서비스 런칭까지 도와드립니다.
              가지고 계신 아이디어를 전문적인 컨설팅을 통해 구체화시켜드립니다.
              어려운 전문용어를 이해하지 못할까 봐 걱정하지 마세요. 비전문가도 쉽게 이해할 수 있는 컨설팅을 진행합니다.
              효과적인 제작 과정을 통하여 안정성&접근성 높은 결과물을 제작합니다."
            />
            <meta name="keywords" content="" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link
              rel="preload"
              as="font"
              href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;900&display=swap"
            />
            <link
              rel="preload"
              as="font"
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700&display=swap"
            />
            <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
            {/* 채널톡 */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
              (function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.")}var ch=function(){ch.c(arguments)};ch.q=[];ch.c=function(args){ch.q.push(args)};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x)}}if(document.readyState==="complete"){l()}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l)}})();
              ChannelIO('boot', {"pluginKey": "993f9258-0cce-4e0d-9174-186e5888c994"});
              `,
              }}
            />
            {/* 채널톡 끝 */}
            {/* Google tag (gtag.js) */}
            <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11098627078"></Script>
            <script dangerouslySetInnerHTML={{__html:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-11098627078');
            `}}>
            </script>
            {/* end of Google tag (gtag.js) */}
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
  }
}
