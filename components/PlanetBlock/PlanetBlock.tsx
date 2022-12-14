import { PlanetBlockProps } from './PlanetBlock.props';
import styles from './PlanetBlock.module.css';
import { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';
import { Heading } from '../Heading/Heading';
import { P } from '../P/P';
import { Divider } from '../Divider/Divider';
import { motion } from 'framer-motion';

export const PlanetBlock = motion(
  forwardRef(
    (
      {
        className,
        name,
        description,
        distance,
        time,
        ...props
      }: PlanetBlockProps,
      ref: ForwardedRef<HTMLDivElement>
    ) => {
      return (
        <article
          className={cn(styles.planetBlock, className)}
          ref={ref}
          {...props}
        >
          <Heading place="pageDestination">{name}</Heading>
          <P className={styles.planetDescription}>{description}</P>
          <Divider className={styles.divider} />
          <div className={styles.planetInfo}>
            <div className={styles.planetInfoBlock}>
              <Heading place="sub">avg. distance</Heading>
              <p className={styles.planetSubInfo}>{distance}</p>
            </div>
            <div className={styles.planetInfoBlock}>
              <Heading place="sub">est. travel time</Heading>
              <p className={styles.planetSubInfo}>{time}</p>
            </div>
          </div>
        </article>
      );
    }
  )
);
