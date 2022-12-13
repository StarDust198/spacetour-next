import type { NextPage } from 'next';
import Head from 'next/head';
import { withLayout } from '../layout/Layout';
import { HomePageComponent } from '../page-components';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Space Tour Home</title>
        <meta name="description" content="Space Tour Homepage" />
      </Head>
      <HomePageComponent />
    </>
  );
};

export default HomePage;
// export default withLayout(HomePage);
