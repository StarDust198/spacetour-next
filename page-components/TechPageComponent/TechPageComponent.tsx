import { TechPageComponentProps } from './TechPageComponent.props';
import styles from './TechPageComponent.module.css';
import { FC, useContext, useState } from 'react';
import { Heading, NumberIndicators, TechBlock } from '../../components';
import Image from 'next/image';
import { bothDirectionAnimation } from '../../helpers/helpers';
import { AnimatePresence, motion } from 'framer-motion';
import { AppContext } from '../../layout/Layout';

export const TechPageComponent: FC<TechPageComponentProps> = ({
  // className,
  technology,
  // ...props
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
        <span>03</span>space launch 101
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
                className={styles.techImageMobile}
                alt={technology[techItem].title}
                src={technology[techItem].img}
                fill
              />
              <Image
                className={styles.techImageDesktop}
                alt={technology[techItem].title}
                src={technology[techItem].imgDesktop}
                fill
              />
            </motion.div>
          </AnimatePresence>
          <div className={styles.techMain} key="techBg">
            <NumberIndicators
              selected={techItem}
              setSelected={changeTechItem}
              total={technology.length}
              className={styles.techNav}
            />
            <AnimatePresence mode="wait">
              <TechBlock
                className={styles.techBlock}
                name={technology[techItem].title}
                description={technology[techItem].description}
                animate="visible"
                initial="enter"
                exit="exit"
                variants={bothDirectionAnimation}
                key={`${techItem}TechBlock`}
                custom={[direction, device === 'desktop' ? 'y' : 'x']}
              />
            </AnimatePresence>
          </div>
        </>
      )}
    </>
  );
};
