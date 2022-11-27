import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import { FC, useState } from 'react';
import cn from 'classnames';
import logoIcon from './logo.svg';
import menuIcon from './menu.svg';
import closeIcon from './close.svg';
import { Divider, NavMenu } from '../../components';

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className={cn(className, styles.header)}>
      <img className={styles.logoIcon} {...logoIcon} />
      <Divider className={styles.divider} />
      <NavMenu
        position={menuOpen ? 'visible' : 'hidden'}
        className={styles.menu}
      />
      <button
        className={styles.menuBtn}
        onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
      >
        {menuOpen ? (
          <img className={styles.closeIcon} {...closeIcon} />
        ) : (
          <img className={styles.menuIcon} {...menuIcon} />
        )}
      </button>
    </header>
  );
};
