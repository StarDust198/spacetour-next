import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { DestinationPageComponent } from '../page-components';
// import axios from 'axios';
import { DestinationItem } from '../interfaces/destination.interface';
import destinationData from '../data/destinationData.json';

const DestinationPage: NextPage<DestinationPageProps> = ({ destinations }) => {
  return (
    <>
      <Head>
        <title>Space Tour - Pick Your Destination</title>
        <meta name="description" content="Space Tour Destination Page" />
      </Head>
      <DestinationPageComponent destinations={destinations} />
    </>
  );
};

export default DestinationPage;

export const getStaticProps: GetStaticProps<
  DestinationPageProps
> = async () => {
  // const { data: destinations } = await axios.get<DestinationItem[]>(
  //   process.env.NEXT_PUBLIC_DOMAIN + '/api/destination',
  //   {
  //     headers: {
  //       'Accept-Encoding': 'application/json',
  //     },
  //   }
  // );
  return {
    props: {
      destinations: destinationData,
    },
  };
};

interface DestinationPageProps extends Record<string, unknown> {
  destinations: DestinationItem[];
}
