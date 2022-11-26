import { DotIndicatorsProps } from './DotIndicators.props';
import styles from './DotIndicators.module.css';
import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

export const DotIndicators: FC<DotIndicatorsProps> = ({
  selected,
  setSelected,
  total,
  className,
  ...props
}) => {
  const [dotArr, setDotArr] = useState<JSX.Element[]>(
    new Array(total).fill(<></>)
  );

  useEffect(() => {
    constructDotIndicators(selected);
  }, [selected]);

  const constructDotIndicators = (selected: number) => {
    const updatedArr = dotArr.map((number: JSX.Element, i: number) => {
      return (
        <button
          role="tab"
          className={styles.dotButton}
          onClick={() => {
            setSelected(i + 1);
          }}
          aria-selected={selected === i + 1}
        />
      );
    });
    setDotArr(updatedArr);
  };

  return (
    <ul className={cn(styles.dotList, className)} {...props}>
      {dotArr.map((number, i) => (
        <li className={styles.dotItem} key={`dotIndicator${i + 1}`}>
          {number}
        </li>
      ))}
    </ul>
  );

  // const [activeMember, setActiveMember] = useState<CrewName>(crew[0]);

  // const renderItems = () => {
  //   return crew.map((member) => (
  //     <li className={styles.dotItem} key={member}>
  //       <button
  //         role="tab"
  //         className={styles.dotButton}
  //         onClick={() => {
  //           setActiveMember(member);
  //         }}
  //         aria-selected={member === activeMember}
  //       />
  //     </li>
  //   ));
  // };

  // return (
  //   <ul className={cn(styles.dotList, className)} {...props}>
  //     {renderItems()}
  //   </ul>
  // );
};
