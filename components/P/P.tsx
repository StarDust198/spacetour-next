import { PProps } from './P.props';
import styles from './P.module.css';
import { FC } from 'react';
import cn from 'classnames';

export const P: FC<PProps> = ({ className, children, ...props }) => {
  return (
    <p className={cn(styles.p, className)} {...props}>
      {children}
    </p>
  );
};
