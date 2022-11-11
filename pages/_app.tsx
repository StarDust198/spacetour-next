import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Space Tour</title>
        <meta name="description" content="Space Tour" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
