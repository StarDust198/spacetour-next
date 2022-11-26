import { UnderlineIndicatorsProps } from './UnderlineIndicators.props';
import styles from './UnderlineIndicators.module.css';
import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import { NavText } from '../NavText/NavText';

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
            setSelected(i + 1);
          }}
          aria-selected={selected === i + 1}
        >
          <NavText place="info">{text}</NavText>
        </button>
      );
    });
    setValuesArr(updatedArr);
  };

  return (
    <ul className={cn(styles.underlineList, className)} {...props}>
      {valuesArr.map((number, i) => (
        <li className={styles.underlineItem} key={`numIndicator${i + 1}`}>
          {number}
        </li>
      ))}
    </ul>
  );
};
