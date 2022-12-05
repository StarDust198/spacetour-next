import { TechBlockProps } from './TechBlock.props';
import styles from './TechBlock.module.css';
import { FC } from 'react';
import cn from 'classnames';
import { Heading } from '../Heading/Heading';
import { P } from '../P/P';
import { NavText } from '../NavText/NavText';

export const TechBlock: FC<TechBlockProps> = ({
  className,
  name,
  description,
  rank,
  ...props
}) => {
  return (
    <div className={cn(styles.crewBlock, className)} {...props}>
      <NavText place="info">the terminology...</NavText>
      <Heading size="small">{name}</Heading>
      <P className={styles.crewDescription}>{description}</P>
    </div>
  );
};
