import { DestinationPageComponentProps } from './DestinationPageComponent.props';
import styles from './DestinationPageComponent.module.css';
import { FC, useState } from 'react';
import cn from 'classnames';
import { Heading, PlanetBlock, UnderlineIndicators } from '../../components';
// import bgMobile from '../../assets/destination/background-destination-mobile.jpg';
// import bgTablet from '../../assets/destination/background-destination-tablet.jpg';
// import bgDesktop from '../../assets/destination/background-destination-desktop.jpg';
import Image from 'next/image';

export const DestinationPageComponent: FC<DestinationPageComponentProps> = ({
  className,
  destinations,
  ...props
}) => {
  const [planet, setPlanet] = useState<number>(0);

  return (
    <>
      <div
        className={cn('gridContainer', styles.wrapper, className)}
        {...props}
      >
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
      </div>
      <div className="bg">
        <Image
          className="bgMobile"
          src={'/assets/destination/background-destination-mobile.jpg'}
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <Image
          className="bgTablet"
          src={'/assets/destination/background-destination-tablet.jpg'}
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <Image
          className="bgDesktop"
          src={'/assets/destination/background-destination-desktop.jpg'}
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </>
  );
};
