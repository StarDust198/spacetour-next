import { HomePageComponentProps } from './HomePageComponent.props';
import styles from './HomePageComponent.module.css';
import { FC } from 'react';
import { Heading, HomeButton, P } from '../../components';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const HomePageComponent: FC<HomePageComponentProps> = ({
  className,
  ...props
}) => {
  return (
    <>
      <div className={styles.homeBlock}>
        <Heading place="home" className={styles.homeTitle}>
          SO, YOU WANT TO TRAVEL TO<em>SPACE</em>
        </Heading>
        <P className={styles.homeDescription}>
          Let’s face it: if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </P>
      </div>
      <HomeButton className={styles.homeButton} />
    </>
  );
};
