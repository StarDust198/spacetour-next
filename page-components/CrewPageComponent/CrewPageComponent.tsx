import { CrewPageComponentProps } from './CrewPageComponent.props';
import styles from './CrewPageComponent.module.css';
import { FC, useState } from 'react';
import { CrewBlock, Divider, DotIndicators, Heading } from '../../components';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { tabAnimation } from '../../helpers/helpers';

export const CrewPageComponent: FC<CrewPageComponentProps> = ({ crew }) => {
  const [direction, setDirection] = useState<number>(0);
  const [crewMember, setCrewMember] = useState<number>(0);
  const shouldReduceMotion = useReducedMotion();

  const changeCrewMember = async (n: number) => {
    if (n === crewMember) return;
    n = n >= crew.length ? 0 : n < 0 ? crew.length - 1 : n;
    await setDirection(n - crewMember);
    setCrewMember(n);
  };

  return (
    <>
      <Heading place="nav" className="pageTitle">
        <span aria-hidden>02</span>meet your crew
      </Heading>
      <AnimatePresence mode="wait">
        <motion.div
          className={styles.crewImage}
          animate="visible"
          initial="enter"
          exit="exit"
          variants={tabAnimation}
          key={`${crewMember}CrewImage`}
          custom={{ direction, shouldReduceMotion }}
        >
          <Image alt={crew[crewMember].title} src={crew[crewMember].img} fill />
          <Divider className={styles.divider} />
        </motion.div>
      </AnimatePresence>

      <DotIndicators
        className={styles.crewNav}
        selected={crewMember}
        setSelected={changeCrewMember}
        values={crew.map((member) => member.rank)}
      />

      <AnimatePresence mode="wait">
        {crew.map((member, i) => (
          <CrewBlock
            role="tabpanel"
            className={styles.crewBlock}
            title={member.title}
            rank={member.rank}
            description={member.description}
            animate="visible"
            initial="enter"
            exit="exit"
            variants={tabAnimation}
            custom={{ direction, shouldReduceMotion }}
            key={
              i === crewMember
                ? `${member.rank}VisibleBlock`
                : `${member.rank}HiddenBlock`
            }
            id={`${member.rank}-tabpanel`}
            tabIndex={0}
            aria-labelledby={`${member.rank}-tab`}
            hidden={i !== crewMember}
          />
        ))}
      </AnimatePresence>
    </>
  );
};
