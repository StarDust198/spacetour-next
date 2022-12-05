import { DestinationPageComponentProps } from './DestinationPageComponent.props';
import styles from './DestinationPageComponent.module.css';
import { FC, useState } from 'react';
import cn from 'classnames';
import { NavText, PlanetBlock, UnderlineIndicators } from '../../components';
import bgMobile from '../../assets/destination/background-destination-mobile.jpg';
import bgTablet from '../../assets/destination/background-destination-tablet.jpg';
import bgDesktop from '../../assets/destination/background-destination-desktop.jpg';
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
        <NavText place={'page'} className={styles.pageTitle}>
          <em>01</em>pick your destination
        </NavText>
        <div className={styles.planetImage}>
          <Image alt={'Moon'} src={destinations[0].img} fill />
        </div>
        <UnderlineIndicators
          className={styles.planetNav}
          selected={planet}
          setSelected={setPlanet}
          values={['moon', 'mars', 'europa', 'titan']}
        />
        <PlanetBlock
          className={styles.planetBlock}
          name={destinations[0].title}
          description={destinations[0].description}
          distance={destinations[0].distance}
          time={destinations[0].time}
        />
      </div>
      <div className={styles.bg}>
        <Image
          className={styles.bgMobile}
          src={bgMobile.src}
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <Image
          className={styles.bgTablet}
          src={bgTablet.src}
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <Image
          className={styles.bgDesktop}
          src={bgDesktop.src}
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </>
  );
};
