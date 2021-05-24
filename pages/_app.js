import React, { useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import loadcss from 'loadcss';

Router.onRouteChangeComplete = () => {
  try {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-127707652-1');
  } catch (error) {}
};

function App(props) {
  const { Component, pageProps } = props;
  useEffect(() => {
    // 속도를 위해 웹폰트는 지연 로딩
    loadcss([
      'https://fonts.googleapis.com/earlyaccess/notosanskr.css',
      'https://fonts.googleapis.com/css?family=Poiret+One',
    ]);
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
