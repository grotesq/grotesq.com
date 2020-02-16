import React from 'react';
import SuperApp from 'next/app';
import Router from 'next/router';

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

class App extends SuperApp {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default App;
