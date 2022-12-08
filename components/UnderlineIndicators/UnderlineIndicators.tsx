import { UnderlineIndicatorsProps } from './UnderlineIndicators.props';
import styles from './UnderlineIndicators.module.css';
import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

export const UnderlineIndicators: FC<UnderlineIndicatorsProps> = ({
  selected,
  setSelected,
  values,
  className,
  ...props
}) => {
  const [valuesArr, setValuesArr] = useState<JSX.Element[]>(
    new Array(values.length).fill(<></>)
  );

  useEffect(() => {
    constructUnderlineIndicators(selected);
  }, [selected]);

  const constructUnderlineIndicators = (selected: number) => {
    const updatedArr = values.map((text: string, i: number) => {
      return (
        <button
          role="tab"
          className={styles.underlineButton}
          onClick={() => {
            setSelected(i);
          }}
          aria-selected={selected === i}
        >
          {text}
        </button>
      );
    });
    setValuesArr(updatedArr);
  };

  return (
    <ul className={cn(styles.underlineList, className)} {...props}>
      {valuesArr.map((number, i) => (
        <li className={styles.underlineItem} key={`numIndicator${i}`}>
          {number}
        </li>
      ))}
    </ul>
  );
};
