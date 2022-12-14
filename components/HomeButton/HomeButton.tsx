import { HomeButtonProps } from './HomeButton.props';
import styles from './HomeButton.module.css';
import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';

export const HomeButton: FC<HomeButtonProps> = ({ className, ...props }) => {
  return (
    <Link
      href="/destination"
      className={cn(styles.homeButton, className)}
      {...props}
    >
      Explore
    </Link>
  );
};
