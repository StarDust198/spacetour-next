import { DividerProps } from './Divider.props';
import styles from './Divider.module.css';
import { FC } from 'react';
import cn from 'classnames';

export const Divider: FC<DividerProps> = ({ className, ...props }) => {
  return <hr className={cn(styles.hr, className)} {...props} />;
};
