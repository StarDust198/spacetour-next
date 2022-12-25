import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import { FC, useContext, useEffect, useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import logoIcon from './logo.svg';
import menuIcon from './menu.svg';
import closeIcon from './close.svg';
import { Divider, NavMenu } from '../../components';
import { AppContext } from '../Layout';
import { IAppContext } from '../../interfaces/context.interface';
import { useRouter } from 'next/router';

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { device } = useContext<IAppContext>(AppContext);
  const router = useRouter();

  useEffect(() => {
    setMenuOpen(false);
  }, [router]);

  return (
    <header className={cn(className, styles.header)} {...props}>
      <Image
        className={styles.logoIcon}
        src={logoIcon}
        alt="Space Tourism Logo"
        width={device === 'mobile' ? '40' : '48'}
      />
      <Divider className={styles.divider} />
      <NavMenu
        id="primary-nav"
        position={menuOpen ? 'visible' : 'hidden'}
        className={styles.menu}
      />
      <button
        aria-controls="primary-nav"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        className={styles.menuBtn}
        onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
      >
        {menuOpen ? (
          <Image
            src={closeIcon}
            alt="Close menu"
            className={styles.closeIcon}
          />
        ) : (
          <Image src={menuIcon} alt="Open menu" className={styles.menuIcon} />
        )}
      </button>
    </header>
  );
};
