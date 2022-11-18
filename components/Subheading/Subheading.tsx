import { SubheadingProps } from './Subheading.props';
import styles from './Subheading.module.css';
import { FC } from 'react';
import cn from 'classnames';

export const Subheading: FC<SubheadingProps> = ({
  className,
  size = 'big',
  children,
  ...props
}) => {
  return (
    <h3
      className={cn(styles.subheading, className, {
        [styles.big]: size === 'big',
        [styles.small]: size === 'small',
      })}
      {...props}
    >
      {children}
    </h3>
  );
};
