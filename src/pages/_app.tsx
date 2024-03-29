import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme";
import '../styles/tailwind.css';
import { NavProvider } from '../contexts/NavContext';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <NavProvider>
        <Head>
          {/* Favicons */}
          <link rel="apple-touch-icon" sizes="57x57" href="/favicons/Grotesq-favicon-57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/favicons/Grotesq-favicon-60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/favicons/Grotesq-favicon-72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/favicons/Grotesq-favicon-76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/favicons/Grotesq-favicon-114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/favicons/Grotesq-favicon-120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/favicons/Grotesq-favicon-144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/favicons/Grotesq-favicon-152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/Grotesq-favicon-180.png" />

          <link rel="icon" type="image/png" sizes="192x192" href="/favicons/Grotesq-favicon-192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/Grotesq-favicon-32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicons/Grotesq-favicon-96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/Grotesq-favicon-16.png" />
        </Head>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </NavProvider>
    </>
  );
}
export default MyApp;
