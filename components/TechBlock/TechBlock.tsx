import { TechBlockProps } from './TechBlock.props';
import styles from './TechBlock.module.css';
import { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';
import { Heading } from '../Heading/Heading';
import { P } from '../P/P';
import { motion } from 'framer-motion';

export const TechBlock = motion(
  forwardRef(
    (
      { className, name, description, ...props }: TechBlockProps,
      ref: ForwardedRef<HTMLDivElement>
    ) => {
      return (
        <article
          className={cn(styles.techBlock, className)}
          ref={ref}
          {...props}
        >
          <Heading place="pageOther">
            <span>the terminology...</span>
            {name}
          </Heading>
          <P className={styles.techDescription}>{description}</P>
        </article>
      );
    }
  )
);
