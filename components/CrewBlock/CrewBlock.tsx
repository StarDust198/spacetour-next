import { CrewBlockProps } from './CrewBlock.props';
import styles from './CrewBlock.module.css';
import { FC } from 'react';
import cn from 'classnames';
import { Heading } from '../Heading/Heading';
import { P } from '../P/P';

export const CrewBlock: FC<CrewBlockProps> = ({
  className,
  title,
  description,
  rank,
  ...props
}) => {
  return (
    <div className={cn(styles.crewBlock, className)} {...props}>
      <Heading className={styles.crewTitle} size="small">
        <em>{rank}</em>
        {title}
      </Heading>
      <P className={styles.crewDescription}>{description}</P>
    </div>
  );
};
