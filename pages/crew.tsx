import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { withLayout } from '../layout/Layout';
import { CrewPageComponent } from '../page-components';
import axios from 'axios';
import { CrewItem } from '../interfaces/crew.interface';

const CrewPage: NextPage<CrewPageProps> = ({ crew }) => {
  return (
    <>
      <Head>
        <title>Space Tour - Meet Your Crew</title>
        <meta name="description" content="Space Tour Crew Page" />
      </Head>
      <CrewPageComponent crew={crew} />
    </>
  );
};

export default CrewPage;
// export default withLayout(CrewPage);

export const getStaticProps: GetStaticProps<CrewPageProps> = async () => {
  const { data: crew } = await axios.get<CrewItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/crew',
    {
      headers: {
        'Accept-Encoding': 'application/json',
      },
    }
  );
  return {
    props: {
      crew,
    },
  };
};

interface CrewPageProps extends Record<string, unknown> {
  crew: CrewItem[];
}
