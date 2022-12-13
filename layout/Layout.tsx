import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import { FC, useRef, useState, KeyboardEvent } from 'react';
import cn from 'classnames';
import { Header } from './Header/Header';
import { AnimatePresence, motion } from 'framer-motion';
import { variantsMain } from '../helpers/helpers';
import { useRouter } from 'next/router';

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [showSkip, setShowSkip] = useState<boolean>(false);
  const router = useRouter();

  const bodyRef = useRef<HTMLDivElement>(null);

  const onSkip = (e: KeyboardEvent): void => {
    if (e.code == 'Space' || e.code === 'Enter') {
      e.preventDefault();
      bodyRef.current?.focus();
    }
    setShowSkip(false);
  };

  return (
    <div className={styles.wrapper}>
      <a
        tabIndex={0}
        className={cn(styles.skipLink, {
          [styles.showSkipLink]: showSkip,
        })}
        onFocus={(): void => setShowSkip(true)}
        onKeyDown={(e: KeyboardEvent): void => onSkip(e)}
      >
        Skip to content
      </a>
      <Header className={styles.header} />
      <AnimatePresence mode="wait">
        <motion.main
          key={router.asPath}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ duration: 1 }}
          variants={variantsMain}
          className={cn(styles.gridContainer, {
            [styles.gridContainerHome]: router.asPath === '/',
            [styles.gridContainerDestination]: router.asPath === '/destination',
            [styles.gridContainerCrew]: router.asPath === '/crew',
            [styles.gridContainerTech]: router.asPath === '/technology',
          })}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FC<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
