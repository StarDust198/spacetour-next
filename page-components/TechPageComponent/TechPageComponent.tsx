import { TechPageComponentProps } from './TechPageComponent.props';
import styles from './TechPageComponent.module.css';
import { FC, useContext, useState } from 'react';
import { Heading, NumberIndicators, TechBlock } from '../../components';
import Image from 'next/image';
import { bothDirectionAnimation } from '../../helpers/helpers';
import { AnimatePresence, motion } from 'framer-motion';
import { AppContext } from '../../layout/Layout';

export const TechPageComponent: FC<TechPageComponentProps> = ({
  technology,
}) => {
  const [techItem, setTechItem] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const { device } = useContext(AppContext);

  const changeTechItem = async (n: number) => {
    if (n === techItem) return;
    n = n >= technology.length ? 0 : n < 0 ? technology.length - 1 : n;
    await setDirection(n - techItem);
    setTechItem(n);
  };

  return (
    <>
      <Heading place="nav" className="pageTitle">
        <span aria-hidden>03</span>space launch 101
      </Heading>
      {device && (
        <>
          <AnimatePresence mode="wait">
            <motion.div
              className={styles.techImage}
              animate="visible"
              initial="enter"
              exit="exit"
              variants={bothDirectionAnimation}
              key={`${techItem}TechImage`}
              custom={[direction, device === 'desktop' ? 'y' : 'x']}
            >
              <Image
                className={styles.techImage}
                alt={technology[techItem].title}
                src={
                  device === 'desktop'
                    ? technology[techItem].imgDesktop
                    : technology[techItem].img
                }
                fill
              />
            </motion.div>
          </AnimatePresence>
          <div className={styles.techMain} key="techBg">
            <NumberIndicators
              selected={techItem}
              setSelected={changeTechItem}
              values={technology.map((item) => item.title)}
              className={styles.techNav}
              orientation={device === 'desktop' ? 'y' : 'x'}
            />
            <AnimatePresence mode="wait">
              {technology.map((item, i) => (
                <TechBlock
                  role="tabpanel"
                  className={styles.techBlock}
                  name={item.title}
                  description={item.description}
                  animate="visible"
                  initial="enter"
                  exit="exit"
                  variants={bothDirectionAnimation}
                  key={
                    i === techItem
                      ? `${item.title}VisibleBlock`
                      : `${item.title}HiddenBlock`
                  }
                  custom={[direction, device === 'desktop' ? 'y' : 'x']}
                  id={`${item.title}-tabpanel`}
                  tabIndex={0}
                  aria-labelledby={`${item.title}-tab`}
                  hidden={i !== techItem}
                />
              ))}
            </AnimatePresence>
          </div>
        </>
      )}
    </>
  );
};
