import { TechPageComponentProps } from './TechPageComponent.props';
import styles from './TechPageComponent.module.css';
import { FC, useState } from 'react';
import cn from 'classnames';
import { NavText } from '../../components';
import bgMobile from '../../assets/technology/background-technology-mobile.jpg';
import bgTablet from '../../assets/technology/background-technology-tablet.jpg';
import bgDesktop from '../../assets/technology/background-technology-desktop.jpg';
import Image from 'next/image';

export const TechPageComponent: FC<TechPageComponentProps> = ({
  className,
  technology,
}) => {
  const [techItem, setTechItem] = useState<number>(0);

  return (
    <div className={cn(styles.wrapper, className)}>
      <NavText place={'page'} className={styles.pageTitle}>
        <em>01</em>pick your destination
      </NavText>

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
