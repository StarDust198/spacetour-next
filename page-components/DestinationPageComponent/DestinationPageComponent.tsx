import { DestinationPageComponentProps } from './DestinationPageComponent.props';
import styles from './DestinationPageComponent.module.css';
import { FC, useState } from 'react';
import cn from 'classnames';
import { Heading, PlanetBlock, UnderlineIndicators } from '../../components';
import Image from 'next/image';
import { variantsMain } from '../../helpers/helpers';
import { AnimatePresence, motion } from 'framer-motion';

export const DestinationPageComponent: FC<DestinationPageComponentProps> = ({
  className,
  destinations,
  ...props
}) => {
  const [planet, setPlanet] = useState<number>(0);

  return (
    <>
      <Heading place="nav" className="pageTitle">
        <span>01</span>pick your destination
      </Heading>
      <div className={styles.planetImage}>
        <Image
          alt={destinations[planet].title}
          src={destinations[planet].img}
          fill
        />
      </div>
      <UnderlineIndicators
        className={styles.planetNav}
        selected={planet}
        setSelected={setPlanet}
        values={['moon', 'mars', 'europa', 'titan']}
      />
      <PlanetBlock
        className={styles.planetBlock}
        name={destinations[planet].title}
        description={destinations[planet].description}
        distance={destinations[planet].distance}
        time={destinations[planet].time}
      />
    </>
  );
};
