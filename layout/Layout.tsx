import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import { FC, useRef, useState, KeyboardEvent } from 'react';
import cn from 'classnames';
import { Header } from './Header/Header';

const Layout: FC<LayoutProps> = ({ children }) => {
  const [showSkip, setShowSkip] = useState<boolean>(false);
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
      {/* <main className={styles.body} tabIndex={0} ref={bodyRef} role="main"> */}
      {children}
      {/* </main> */}
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
