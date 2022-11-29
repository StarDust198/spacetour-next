import { PlanetBlockProps } from './PlanetBlock.props';
import styles from './PlanetBlock.module.css';
import { FC } from 'react';
import cn from 'classnames';
import { Heading } from '../Heading/Heading';
import { P } from '../P/P';
import { Divider } from '../Divider/Divider';
import { Subheading } from '../Subheading/Subheading';

export const PlanetBlock: FC<PlanetBlockProps> = ({
  className,
  name,
  description,
  distance,
  time,
  ...props
}) => {
  return (
    <div className={cn(styles.planetBlock, className)} {...props}>
      <Heading size="medium">{name}</Heading>
      <P className={styles.planetDescription}>{description}</P>
      <Divider className={styles.divider} />
      <div className={styles.planetInfo}>
        <div className={styles.planetInfoBlock}>
          <Subheading size="small">avg. distance</Subheading>
          <Subheading className={styles.planetSubInfo} size="big">
            {distance}
          </Subheading>
        </div>
        <div className={styles.planetInfoBlock}>
          <Subheading size="small">est. travel time</Subheading>
          <Subheading className={styles.planetSubInfo} size="big">
            {time}
          </Subheading>
        </div>
      </div>
    </div>
  );
};
