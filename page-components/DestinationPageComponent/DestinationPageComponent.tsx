import { DestinationPageComponentProps } from './DestinationPageComponent.props';
import styles from './DestinationPageComponent.module.css';
import { FC, useState } from 'react';
import { Heading, PlanetBlock, UnderlineIndicators } from '../../components';
import Image from 'next/image';
import { fadeAnimation, horizontalAnimation } from '../../helpers/helpers';
import { AnimatePresence, motion } from 'framer-motion';

export const DestinationPageComponent: FC<DestinationPageComponentProps> = ({
  // className,
  destinations,
  // ...props
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
        <span>01</span>pick your destination
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
        values={['moon', 'mars', 'europa', 'titan']}
      />
      <AnimatePresence mode="wait">
        <PlanetBlock
          className={styles.planetBlock}
          name={destinations[planet].title}
          description={destinations[planet].description}
          distance={destinations[planet].distance}
          time={destinations[planet].time}
          animate="visible"
          initial="hidden"
          exit="hidden"
          variants={fadeAnimation}
          key={`${planet}Block`}
        />
      </AnimatePresence>
    </>
  );
};
