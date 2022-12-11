import { TechPageComponentProps } from './TechPageComponent.props';
import styles from './TechPageComponent.module.css';
import { FC, useState } from 'react';
import cn from 'classnames';
import { Heading, NumberIndicators, TechBlock } from '../../components';
import Image from 'next/image';

export const TechPageComponent: FC<TechPageComponentProps> = ({
  className,
  technology,
  ...props
}) => {
  const [techItem, setTechItem] = useState<number>(0);
  return (
    <>
      <div
        className={cn('gridContainer', styles.wrapper, className)}
        {...props}
      >
        <Heading place="nav" className="pageTitle">
          <span>03</span>space launch 101
        </Heading>
        <div className={styles.techImage}>
          <Image
            className={styles.techImageMobile}
            alt={technology[techItem].title}
            src={technology[techItem].img}
            fill
          />
          <Image
            className={styles.techImageDesktop}
            alt={technology[techItem].title}
            src={technology[techItem].imgDesktop}
            fill
          />
        </div>
        <div className={styles.techMain}>
          <NumberIndicators
            selected={techItem}
            setSelected={setTechItem}
            total={technology.length}
            className={styles.techNav}
          />
          <TechBlock
            className={styles.techBlock}
            name={technology[techItem].title}
            description={technology[techItem].description}
          />
        </div>
      </div>
      <div className="bg">
        <Image
          className="bgMobile"
          src="/assets/technology/background-technology-mobile.jpg"
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <Image
          className="bgTablet"
          src="/assets/technology/background-technology-tablet.jpg"
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <Image
          className="bgDesktop"
          src="/assets/technology/background-technology-desktop.jpg"
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </>
  );
};