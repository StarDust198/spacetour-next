import { HomePageComponentProps } from './HomePageComponent.props';
import styles from './HomePageComponent.module.css';
import { FC } from 'react';
import cn from 'classnames';
import { Heading, HomeButton, P } from '../../components';

export const HomePageComponent: FC<HomePageComponentProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.textBlock}>
        <Heading size="big" className={styles.title}>
          <em>SO, YOU WANT TO TRAVEL TO</em>SPACE
        </Heading>
        <P className={styles.text}>
          Let’s face it: if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </P>
      </div>
      <HomeButton className={styles.button} />
    </div>
  );
};
