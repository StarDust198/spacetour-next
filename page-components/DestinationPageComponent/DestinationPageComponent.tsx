import { DestinationPageComponentProps } from './DestinationPageComponent.props';
import styles from './DestinationPageComponent.module.css';
import { FC, useState } from 'react';
import { Heading, PlanetBlock, UnderlineIndicators } from '../../components';
import Image from 'next/image';
import { fadeAnimation, horizontalAnimation } from '../../helpers/helpers';
import { AnimatePresence, motion } from 'framer-motion';

export const DestinationPageComponent: FC<DestinationPageComponentProps> = ({
  destinations,
}) => {
  const [direction, setDirection] = useState<number>(0);
  const [planet, setPlanet] = useState<number>(0);

  const changePlanet = async (n: number) => {
    if (n === planet) return;
    n = n >= destinations.length ? 0 : n < 0 ? destinations.length - 1 : n;
    await setDirection(n - planet);
    setPlanet(n);
  };

  return (
    <>
      <Heading place="nav" className="pageTitle">
        <span aria-hidden>01</span>pick your destination
      </Heading>
      <AnimatePresence mode="wait">
        <motion.div
          className={styles.planetImage}
          variants={horizontalAnimation}
          animate="visible"
          initial="enter"
          exit="exit"
          key={`${planet}Image`}
          custom={direction}
        >
          <Image
            alt={destinations[planet].title}
            src={destinations[planet].img}
            fill
          />
        </motion.div>
      </AnimatePresence>
      <UnderlineIndicators
        className={styles.planetNav}
        selected={planet}
        setSelected={changePlanet}
        values={destinations.map((item) => item.title)}
      />
      {destinations.map((item, i) => (
        <PlanetBlock
          role="tabpanel"
          className={styles.planetBlock}
          name={item.title}
          description={item.description}
          distance={item.distance}
          time={item.time}
          animate={i === planet ? 'visible' : 'hidden'}
          initial="hidden"
          exit="hidden"
          variants={fadeAnimation}
          key={`${item.title}Block`}
          id={`${item.title}-tabpanel`}
          tabIndex={i === planet ? 0 : -1}
          aria-labelledby={`${item.title}-tab`}
        />
      ))}
    </>
  );
};
