import { NavMenuProps } from './NavMenu.props';
import styles from './NavMenu.module.css';
import { FC, useEffect, useRef } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useResizeObserver from 'use-resize-observer';

interface page {
  title: string;
  href: string;
}

const pages: page[] = [
  {
    title: 'home',
    href: '/',
  },
  {
    title: 'destination',
    href: '/destination',
  },
  {
    title: 'crew',
    href: '/crew',
  },
  {
    title: 'technology',
    href: '/technology',
  },
];

export const NavMenu: FC<NavMenuProps> = ({
  position = 'visible',
  className,
  ...props
}) => {
  const router = useRouter();

  const { ref: navRef, width = 1 } = useResizeObserver<HTMLLIElement>({
    box: 'border-box',
  });

  const liRef = useRef<HTMLLIElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (underlineRef.current && liRef.current) {
      underlineRef.current.style.left = `${liRef.current.offsetLeft}px`;
      underlineRef.current.style.width = `${liRef.current.offsetWidth}px`;
    }
    console.log(width);
  }, [router, width]);

  const mappedLinks = pages.map((page, i) => (
    <li
      key={page.title}
      className={styles.navItem}
      ref={router.asPath === page.href ? liRef : null}
    >
      <Link href={page.href}>
        <span aria-hidden>{`0${i}`}</span>
        {page.title}
      </Link>
    </li>
  ));

  return (
    <nav
      className={cn(styles.navMenu, className, {
        [styles.hidden]: position === 'hidden',
      })}
      ref={navRef}
      {...props}
    >
      <ul className={styles.navList}>{mappedLinks}</ul>
      <div className={styles.underline} ref={underlineRef} />
    </nav>
  );
};
