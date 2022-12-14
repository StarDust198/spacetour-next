import { TechPageComponentProps } from './TechPageComponent.props';
import styles from './TechPageComponent.module.css';
import { FC, useState } from 'react';
import cn from 'classnames';
import { Heading, NumberIndicators, TechBlock } from '../../components';
import Image from 'next/image';
import { variantsMain } from '../../helpers/helpers';
import { motion } from 'framer-motion';

export const TechPageComponent: FC<TechPageComponentProps> = ({
  className,
  technology,
  ...props
}) => {
  const [techItem, setTechItem] = useState<number>(0);
  return (
    <>
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
      <div className={styles.techMain} key="techBg">
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
    </>
  );
};
