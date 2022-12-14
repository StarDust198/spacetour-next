import { CrewPageComponentProps } from './CrewPageComponent.props';
import styles from './CrewPageComponent.module.css';
import { FC, useState } from 'react';
import cn from 'classnames';
import { CrewBlock, Divider, DotIndicators, Heading } from '../../components';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const CrewPageComponent: FC<CrewPageComponentProps> = ({
  className,
  crew,
  // ...props
}) => {
  const [crewMember, setCrewMember] = useState<number>(0);

  return (
    <>
      <Heading place="nav" className="pageTitle">
        <span>02</span>meet your crew
      </Heading>
      <div className={styles.crewImage}>
        <Image alt={crew[crewMember].title} src={crew[crewMember].img} fill />
        <Divider className={styles.divider} />
      </div>
      <DotIndicators
        className={styles.crewNav}
        selected={crewMember}
        setSelected={setCrewMember}
        total={crew.length}
      />
      <CrewBlock className={styles.crewBlock} {...crew[crewMember]} />
    </>
  );
};
