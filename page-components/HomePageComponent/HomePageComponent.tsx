import { HomePageComponentProps } from './HomePageComponent.props';
import styles from './HomePageComponent.module.css';
import { FC, useContext } from 'react';
import { Heading, HomeButton, P } from '../../components';
import { motion } from 'framer-motion';
import { homeBlockAnimation, homeButtonAnimation } from '../../helpers/helpers';
import { AppContext } from '../../layout/Layout';

export const HomePageComponent: FC<HomePageComponentProps> = () => {
  const { device } = useContext(AppContext);

  return (
    <>
      {device && (
        <>
          <motion.div
            className={styles.homeBlock}
            variants={homeBlockAnimation}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.1 }}
            custom={device === 'desktop' ? 'x' : 'y'}
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
            variants={homeButtonAnimation}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
            custom={device === 'desktop' ? 'x' : 'y'}
          >
            <HomeButton />
          </motion.div>
        </>
      )}
    </>
  );
};
