import { HomePageComponentProps } from './HomePageComponent.props';
import styles from './HomePageComponent.module.css';
import { FC } from 'react';
import cn from 'classnames';
import { Heading, HomeButton, P } from '../../components';
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
          <Heading place="home" className={styles.homeTitle}>
            SO, YOU WANT TO TRAVEL TO<em>SPACE</em>
          </Heading>
          <P className={styles.homeDescription}>
            Let’s face it: if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </P>
        </div>
        <HomeButton className={styles.homeButton} />
      </div>

      <div className="bg">
        <Image
          className="bgMobile"
          src={'/assets/home/background-home-mobile.jpg'}
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <Image
          className="bgTablet"
          src={'/assets/home/background-home-tablet.jpg'}
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <Image
          className="bgDesktop"
          src={'/assets/home/background-home-desktop.jpg'}
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </>
  );
};
