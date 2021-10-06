import React, { Fragment } from "react";

import App from "next/app";
import type { AppProps } from "next/app";
import Head from "next/head";

// Global styles (TailwindCSS)
import "../src/styles/index.css";

export default class extends App {
  render() {
    const { Component, pageProps }: AppProps = this.props;

    return (
      <Fragment>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

          <link
            rel="shortcut icon"
            href="/favicon.ico"
            type="image/x-icon"
          />
          <link
            rel="icon"
            href="/favicon.ico"
            type="image/x-icon"
          />

          <link rel="manifest" href="/manifest.json" />
          <meta name="mobile-web-app-capable" content="yes" />

          <title>Diego Cardona | Front-end developer</title>
        </Head>

        <Component {...pageProps} />
      </Fragment>
    );
  }
}
