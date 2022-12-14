import { CrewBlockProps } from './CrewBlock.props';
import styles from './CrewBlock.module.css';
import { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';
import { Heading } from '../Heading/Heading';
import { P } from '../P/P';
import { motion } from 'framer-motion';

export const CrewBlock = motion(
  forwardRef(
    (
      { className, title, description, rank, ...props }: CrewBlockProps,
      ref: ForwardedRef<HTMLDivElement>
    ) => {
      return (
        <article
          className={cn(styles.crewBlock, className)}
          ref={ref}
          {...props}
        >
          <Heading className={styles.crewTitle} place="pageOther">
            <em>{rank}</em>
            {title}
          </Heading>
          <P className={styles.crewDescription}>{description}</P>
        </article>
      );
    }
  )
);
