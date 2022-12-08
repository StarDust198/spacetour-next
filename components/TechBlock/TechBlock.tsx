import { TechBlockProps } from './TechBlock.props';
import styles from './TechBlock.module.css';
import { FC } from 'react';
import cn from 'classnames';
import { Heading } from '../Heading/Heading';
import { P } from '../P/P';

export const TechBlock: FC<TechBlockProps> = ({
  className,
  name,
  description,
  ...props
}) => {
  return (
    <div className={cn(styles.techBlock, className)} {...props}>
      <Heading place="pageOther">
        <span>the terminology...</span>
        {name}
      </Heading>
      <P className={styles.techDescription}>{description}</P>
    </div>
  );
};
