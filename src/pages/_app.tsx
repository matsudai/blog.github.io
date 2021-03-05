import React, { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

// eslint-disable-next-line arrow-body-style
const MyApp = ({ Component, pageProps }: AppProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default MyApp;
