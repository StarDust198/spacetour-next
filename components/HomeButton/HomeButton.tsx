import { HomeButtonProps } from './HomeButton.props';
import styles from './HomeButton.module.css';
import { FC } from 'react';
import cn from 'classnames';

export const HomeButton: FC<HomeButtonProps> = ({ className, ...props }) => {
  return (
    <a href="#" className={cn(styles.homeButton, className)} {...props}>
      Explore
    </a>
  );
};
