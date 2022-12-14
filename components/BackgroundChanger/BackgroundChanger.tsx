import { BackgroundChangerProps } from './BackgroundChanger.props';
import styles from './BackgroundChanger.module.css';
import { FC, useContext } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { AppContext } from '../../layout/Layout';
import { bgAnimation } from '../../helpers/helpers';

export const BackgroundChanger: FC<BackgroundChangerProps> = () => {
  const { pages, device, activePage } = useContext(AppContext);
  const shouldReduceMotion = useReducedMotion();

  const images = pages.map(({ title }) => {
    if (device)
      return (
        <Image
          key={`bg-${title}-${device}`}
          src={`/assets/${title}/background-${title}-${device}.jpg`}
          alt="background"
          quality={100}
          fill
          priority={true}
        />
      );
  });

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: shouldReduceMotion ? 0.001 : 1.5 }}
        variants={bgAnimation}
        key={`bg-${device}-${activePage}`}
        className={styles.bg}
      >
        {images[activePage]}
      </motion.div>
    </AnimatePresence>
  );
};
