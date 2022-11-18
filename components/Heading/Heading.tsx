import { HeadingProps, HeadingSize } from './Heading.props';
import styles from './Heading.module.css';
import { FC } from 'react';
import cn from 'classnames';

export const Heading: FC<HeadingProps> = ({
  className,
  tag = 'h1',
  size = 'big',
  children,
  ...props
}) => {
  const clazz = cn(styles.heading, className, {
    [styles.big]: size === 'big',
    [styles.medium]: size === 'medium',
    [styles.small]: size === 'small',
  });

  switch (tag) {
    case 'h1':
      return (
        <h1 className={clazz} {...props}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={clazz} {...props}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={clazz} {...props}>
          {children}
        </h3>
      );
    default:
      return <>!header!</>;
  }
};
