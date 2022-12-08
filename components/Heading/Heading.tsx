import { HeadingProps } from './Heading.props';
import styles from './Heading.module.css';
import { FC } from 'react';
import cn from 'classnames';

export const Heading: FC<HeadingProps> = ({
  className,
  place,
  children,
  ...props
}) => {
  const clazz = cn(styles.heading, className, {
    [styles.home]: place === 'home',
    [styles.pageDestination]: place === 'pageDestination',
    [styles.pageOther]: place === 'pageOther',
    [styles.nav]: place === 'nav',
    [styles.sub]: place === 'sub',
  });

  switch (place) {
    case 'home':
    case 'nav':
      return (
        <h1 className={clazz} {...props}>
          {children}
        </h1>
      );
    case 'pageDestination':
    case 'pageOther':
      return (
        <h2 className={clazz} {...props}>
          {children}
        </h2>
      );
    case 'sub':
      return (
        <h3 className={clazz} {...props}>
          {children}
        </h3>
      );
    default:
      return <>!heading!</>;
  }
};
