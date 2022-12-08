import { PlanetBlockProps } from './PlanetBlock.props';
import styles from './PlanetBlock.module.css';
import { FC } from 'react';
import cn from 'classnames';
import { Heading } from '../Heading/Heading';
import { P } from '../P/P';
import { Divider } from '../Divider/Divider';

export const PlanetBlock: FC<PlanetBlockProps> = ({
  className,
  name,
  description,
  distance,
  time,
  ...props
}) => {
  return (
    <article className={cn(styles.planetBlock, className)} {...props}>
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
};
