import { HomePageComponentProps } from './HomePageComponent.props';
import styles from './HomePageComponent.module.css';
import { FC, useContext } from 'react';
import { Heading, HomeButton, P } from '../../components';
import { motion, useReducedMotion } from 'framer-motion';
import { homeAnimation } from '../../helpers/helpers';
import { AppContext } from '../../layout/Layout';

export const HomePageComponent: FC<HomePageComponentProps> = () => {
  const { device } = useContext(AppContext);
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {device && (
        <>
          <motion.div
            className={styles.homeBlock}
            variants={homeAnimation}
            initial="hidden"
            animate="visible"
            custom={{
              direction: -1,
              coord: device === 'desktop' ? 'x' : 'y',
              shouldReduceMotion,
            }}
          >
            <Heading place="home" className={styles.homeTitle}>
              SO, YOU WANT TO TRAVEL TO<em>SPACE</em>
            </Heading>
            <P className={styles.homeDescription}>
              Let’s face it: if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </P>
          </motion.div>
          <motion.div
            className={styles.homeButton}
            variants={homeAnimation}
            initial="hidden"
            animate="visible"
            custom={{
              direction: 1,
              coord: device === 'desktop' ? 'x' : 'y',
              shouldReduceMotion,
            }}
          >
            <HomeButton />
          </motion.div>
        </>
      )}
    </>
  );
};
