import { NumberIndicatorsProps } from './NumberIndicators.props';
import styles from './NumberIndicators.module.css';
import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

export const NumberIndicators: FC<NumberIndicatorsProps> = ({
  selected,
  setSelected,
  total,
  className,
  ...props
}) => {
  const [numberArr, setNumberArr] = useState<JSX.Element[]>(
    new Array(total).fill(<></>)
  );

  useEffect(() => {
    constructNumberIndicators(selected);
  }, [selected]);

  const constructNumberIndicators = (selected: number) => {
    const updatedArr = numberArr.map((number: JSX.Element, i: number) => {
      return (
        <button
          role="tab"
          className={styles.numButton}
          onClick={() => {
            setSelected(i + 1);
          }}
          aria-selected={selected === i + 1}
        >
          {i + 1}
        </button>
      );
    });
    setNumberArr(updatedArr);
  };

  return (
    <ul className={cn(styles.numList, className)} {...props}>
      {numberArr.map((number, i) => (
        <li className={styles.numItem} key={`numIndicator${i + 1}`}>
          {number}
        </li>
      ))}
    </ul>
  );
};
