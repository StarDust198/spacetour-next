import { BackgroundChangerProps } from './BackgroundChanger.props';
import styles from './BackgroundChanger.module.css';
import { FC, useContext } from 'react';
import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { AppContext } from '../../layout/Layout';
import { bgAnimation } from '../../helpers/helpers';

export const BackgroundChanger: FC<BackgroundChangerProps> = () => {
  const { pages, device, activePage } = useContext(AppContext);

  const images = pages.map(({ title }) => {
    if (device)
      return (
        <Image
          key={`bg-${title}-${device}`}
          src={`/assets/${title}/background-${title}-${device}.jpg`}
          alt="background"
          quality={100}
          fill
        />
      );
  });

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 1.5 }}
        variants={bgAnimation}
        key={`bg-${device}-${activePage}`}
        className={styles.bg}
      >
        {images[activePage]}
      </motion.div>
    </AnimatePresence>
  );
};
