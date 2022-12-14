import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import {
  FC,
  useRef,
  useState,
  KeyboardEvent,
  createContext,
  useEffect,
} from 'react';
import cn from 'classnames';
import { Header } from './Header/Header';
import { AnimatePresence, motion } from 'framer-motion';
import { pages, variantsMain } from '../helpers/helpers';
import { useRouter } from 'next/router';
import { IAppContext } from '../interfaces/context.interface';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import { BackgroundChanger } from '../components';

export const AppContext = createContext<IAppContext>({
  pages,
  device: 'mobile',
  activePage: 0,
});

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [showSkip, setShowSkip] = useState<boolean>(false);

  const isMobile = useMediaQuery(
    { query: '(max-width: 639px)' },
    undefined,
    (matches) => matches && setDevice('mobile')
  );
  const isTablet = useMediaQuery(
    { query: '(min-width: 640px) and (max-width: 1023px)' },
    undefined,
    (matches) => matches && setDevice('tablet')
  );
  const isDesktop = useMediaQuery(
    { query: '(min-width: 1024px)' },
    undefined,
    (matches) => matches && setDevice('desktop')
  );

  const [device, setDevice] = useState<'mobile' | 'tablet' | 'desktop'>();

  useEffect(() => {
    if (isMobile) setDevice('mobile');
    if (isTablet) setDevice('tablet');
    if (isDesktop) setDevice('desktop');
  });

  const router = useRouter();

  const bodyRef = useRef<HTMLDivElement>(null);

  const onSkip = (e: KeyboardEvent): void => {
    console.dir(bodyRef.current);
    if (e.code == 'Space' || e.code === 'Enter') {
      e.preventDefault();
      bodyRef.current?.focus();
    }
    setShowSkip(false);
  };

  return (
    <AppContext.Provider
      value={{
        pages,
        device,
        activePage: pages.find((page) => page.href === router.asPath)?._id || 0,
      }}
    >
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
            ref={bodyRef}
            tabIndex={0}
            className={cn(styles.gridContainer, {
              [styles.gridContainerHome]: router.asPath === '/',
              [styles.gridContainerDestination]:
                router.asPath === '/destination',
              [styles.gridContainerCrew]: router.asPath === '/crew',
              [styles.gridContainerTech]: router.asPath === '/technology',
            })}
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <BackgroundChanger />
      </div>
    </AppContext.Provider>
  );
};

// export const withLayout = <T extends Record<string, unknown> & IAppContext>(
//   Component: FC<T>
// ) => {
//   const [device, setDevice] = useState<'mobile' | 'tablet' | 'desktop'>(
//     'mobile'
//   );

//   return function withLayoutComponent(props: T): JSX.Element {
//     return (
//       <AppContext.Provider value={{ pages, device }}>
//         <Layout>
//           <Component {...props} />
//         </Layout>
//       </AppContext.Provider>
//     );
//   };
// };
