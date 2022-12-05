import { CrewPageComponentProps } from './CrewPageComponent.props';
import styles from './CrewPageComponent.module.css';
import { FC, useState } from 'react';
import cn from 'classnames';
import { CrewBlock, Divider, DotIndicators, NavText } from '../../components';
import bgMobile from '../../assets/crew/background-crew-mobile.jpg';
import bgTablet from '../../assets/crew/background-crew-tablet.jpg';
import bgDesktop from '../../assets/crew/background-crew-desktop.jpg';
import Image from 'next/image';

export const CrewPageComponent: FC<CrewPageComponentProps> = ({
  className,
  crew,
}) => {
  const [crewMember, setCrewMember] = useState<number>(0);

  return (
    <div className={cn(styles.wrapper, className)}>
      <NavText place={'page'} className={styles.pageTitle}>
        <em>02</em>meet your crew
      </NavText>
      <div className={styles.crewImage}>
        <Image alt={crew[0].title} src={crew[0].img} fill />
        <Divider className={styles.divider} />
      </div>
      <DotIndicators
        className={styles.crewNav}
        selected={crewMember}
        setSelected={setCrewMember}
        total={crew.length}
      />
      <CrewBlock className={styles.crewBlock} {...crew[0]} />
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
