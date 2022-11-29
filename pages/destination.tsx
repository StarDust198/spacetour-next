import type { NextPage } from 'next';
import Head from 'next/head';
import { withLayout } from '../layout/Layout';
import { DestinationPageComponent } from '../page-components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Space Tour - Choose Destination</title>
        <meta name="description" content="Space Tour Destination Page" />
      </Head>
      <DestinationPageComponent />
    </>
  );
};

export default withLayout(Home);
