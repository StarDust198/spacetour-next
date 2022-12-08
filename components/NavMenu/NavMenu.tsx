import { NavMenuProps } from './NavMenu.props';
import styles from './NavMenu.module.css';
import { FC } from 'react';
import cn from 'classnames';

export const NavMenu: FC<NavMenuProps> = ({
  position = 'visible',
  className,
  ...props
}) => {
  return (
    <nav
      className={cn(styles.navMenu, className, {
        [styles.hidden]: position === 'hidden',
      })}
      {...props}
    >
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="/">
            <span aria-hidden>00</span>home
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/destination">
            <span aria-hidden>01</span>destination
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/crew">
            <span aria-hidden>02</span>crew
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/technology">
            <span aria-hidden>03</span>technology
          </a>
        </li>
      </ul>
    </nav>
  );
};
