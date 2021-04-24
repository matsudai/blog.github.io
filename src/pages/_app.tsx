import React, { AppProps } from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

// eslint-disable-next-line arrow-body-style
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>末代</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
