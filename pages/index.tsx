import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Divider,
  Heading,
  HomeButton,
  NavText,
  P,
  PlanetSlider,
  Subheading,
} from '../components';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Space Tour Home</title>
        <meta name="description" content="Space Tour Homepage" />
      </Head>
      <Heading size="big">
        <em>smaller</em> Heading 1
      </Heading>
      <Heading size="medium">Heading 2</Heading>
      <Heading size="small">
        <em>smaller</em> Heading 3
      </Heading>
      <Subheading size="big">subBig</Subheading>
      <Subheading size="small">subSmall</Subheading>
      <NavText place="info">infotext</NavText>
      <NavText place="menu">
        <em>01</em>menutext
      </NavText>
      <NavText place="page">
        <em>02</em>pagetext
      </NavText>
      <Divider />
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fuga quam
        harum deserunt ipsa tempora nobis voluptatibus in placeat fugiat.
        Adipisci ad asperiores quod numquam mollitia non harum. Soluta, commodi!
      </P>
      <HomeButton />
      <PlanetSlider />
    </div>
  );
};

export default Home;
