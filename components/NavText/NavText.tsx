import { NavTextProps } from './NavText.props';
import styles from './NavText.module.css';
import { FC } from 'react';
import cn from 'classnames';

export const NavText: FC<NavTextProps> = ({
  className,
  place,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(styles.navText, className, {
        [styles.menu]: place === 'menu',
        [styles.page]: place === 'page',
        [styles.info]: place === 'info',
      })}
      {...props}
    >
      {children}
    </div>
  );
};
