import { NavMenuProps } from './NavMenu.props';
import styles from './NavMenu.module.css';
import { FC } from 'react';
import cn from 'classnames';
import { NavText } from '../NavText/NavText';

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
          <a href="#">
            <NavText place={'menu'}>
              <em>00</em>home
            </NavText>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#">
            <NavText place={'menu'}>
              <em>01</em>destination
            </NavText>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#">
            <NavText place={'menu'}>
              <em>02</em>crew
            </NavText>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#">
            <NavText place={'menu'}>
              <em>03</em>technology
            </NavText>
          </a>
        </li>
      </ul>
    </nav>
  );
};
