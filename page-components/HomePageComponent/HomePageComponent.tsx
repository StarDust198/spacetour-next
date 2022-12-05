import { HomePageComponentProps } from './HomePageComponent.props';
import styles from './HomePageComponent.module.css';
import { FC } from 'react';
import cn from 'classnames';
import { Heading, HomeButton, P } from '../../components';
import bgMobile from '../../assets/home/background-home-mobile.jpg';
import bgTablet from '../../assets/home/background-home-tablet.jpg';
import bgDesktop from '../../assets/home/background-home-desktop.jpg';
import Image from 'next/image';

export const HomePageComponent: FC<HomePageComponentProps> = ({
  className,
  ...props
}) => {
  return (
    <>
      <div
        className={cn('gridContainer', styles.wrapper, className)}
        {...props}
      >
        <div className={styles.homeBlock}>
          <Heading size="big" className={styles.homeTitle}>
            SO, YOU WANT TO TRAVEL TO<em>SPACE</em>
          </Heading>
          <P className={styles.homeDescription}>
            Let’s face it: if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </P>
        </div>
        <HomeButton className={styles.button} />
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
