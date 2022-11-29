import { DestinationPageComponentProps } from './DestinationPageComponent.props';
import styles from './DestinationPageComponent.module.css';
import { FC, useState } from 'react';
import cn from 'classnames';
import { NavText, PlanetBlock, UnderlineIndicators } from '../../components';
import bgMobile from '../../assets/destination/background-destination-mobile.jpg';
import bgTablet from '../../assets/destination/background-destination-tablet.jpg';
import bgDesktop from '../../assets/destination/background-destination-desktop.jpg';
import imgMoon from '../../assets/destination/image-moon.webp';
import Image from 'next/image';

export const DestinationPageComponent: FC<DestinationPageComponentProps> = ({
  className,
  ...props
}) => {
  const [planet, setPlanet] = useState<number>(0);

  return (
    <div className={cn(styles.wrapper, className)}>
      <NavText place={'page'} className={styles.pageTitle}>
        <em>01</em>pick your destination
      </NavText>
      <div className={styles.planetImage}>
        <Image alt={'Moon'} src={imgMoon.src} fill />
      </div>
      <UnderlineIndicators
        className={styles.planetNav}
        selected={planet}
        setSelected={setPlanet}
        values={['moon', 'mars', 'europa', 'titan']}
      />
      <PlanetBlock
        className={styles.planetBlock}
        name="moon"
        description="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
        distance="3 miles"
        time="1 year"
      />
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
    </div>
  );
};
