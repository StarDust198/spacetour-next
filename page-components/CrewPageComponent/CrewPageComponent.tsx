import { CrewPageComponentProps } from './CrewPageComponent.props';
import styles from './CrewPageComponent.module.css';
import { FC, useState } from 'react';
import { CrewBlock, Divider, DotIndicators, Heading } from '../../components';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { horizontalAnimation } from '../../helpers/helpers';

export const CrewPageComponent: FC<CrewPageComponentProps> = ({
  // className,
  crew,
  // ...props
}) => {
  const [direction, setDirection] = useState<number>(0);
  const [crewMember, setCrewMember] = useState<number>(0);

  const changeCrewMember = async (n: number) => {
    if (n === crewMember) return;
    n = n >= crew.length ? 0 : n < 0 ? crew.length - 1 : n;
    await setDirection(n - crewMember);
    setCrewMember(n);
  };

  return (
    <>
      <Heading place="nav" className="pageTitle">
        <span>02</span>meet your crew
      </Heading>
      <AnimatePresence>
        <motion.div
          className={styles.crewImage}
          animate="visible"
          initial="enter"
          exit="exit"
          variants={horizontalAnimation}
          key={`${crewMember}CrewImage`}
          custom={direction}
        >
          <Image alt={crew[crewMember].title} src={crew[crewMember].img} fill />
          <Divider className={styles.divider} />
        </motion.div>
        <DotIndicators
          className={styles.crewNav}
          selected={crewMember}
          setSelected={changeCrewMember}
          total={crew.length}
        />
        <CrewBlock
          className={styles.crewBlock}
          animate="visible"
          initial="enter"
          exit="exit"
          variants={horizontalAnimation}
          key={`${crewMember}CrewBlock`}
          custom={direction}
          {...crew[crewMember]}
        />
      </AnimatePresence>
    </>
  );
};
