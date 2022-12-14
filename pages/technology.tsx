import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { TechPageComponent } from '../page-components';
// import axios from 'axios';
import { TechItem } from '../interfaces/technology.interface';
import techData from '../data/techData.json';

const TechPage: NextPage<TechPageProps> = ({ technology }) => {
  return (
    <>
      <Head>
        <title>Space Tour - Space Launch 101</title>
        <meta name="description" content="Space Tour Technology Page" />
      </Head>
      <TechPageComponent technology={technology} />
    </>
  );
};

export default TechPage;

export const getStaticProps: GetStaticProps<TechPageProps> = async () => {
  // const { data: technology } = await axios.get<TechItem[]>(
  //   process.env.NEXT_PUBLIC_DOMAIN + '/api/technology',
  //   {
  //     headers: {
  //       'Accept-Encoding': 'application/json',
  //     },
  //   }
  // );
  return {
    props: {
      technology: techData,
    },
  };
};

interface TechPageProps extends Record<string, unknown> {
  technology: TechItem[];
}
