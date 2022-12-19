import { UnderlineIndicatorsProps } from './UnderlineIndicators.props';
import styles from './UnderlineIndicators.module.css';
import {
  FC,
  useEffect,
  useState,
  KeyboardEvent,
  Fragment,
  useRef,
} from 'react';
import cn from 'classnames';

export const UnderlineIndicators: FC<UnderlineIndicatorsProps> = ({
  selected,
  setSelected,
  values,
  className,
  ...props
}) => {
  const [valuesArr, setValuesArr] = useState<JSX.Element[]>(
    values.map((text) => <Fragment key={`${text}-fragment`}></Fragment>)
  );
  const valuesArrayRef = useRef<(HTMLButtonElement | null)[]>([]);
  const focus = useRef<number>(0);

  useEffect(() => {
    constructUnderlineIndicators(selected);
  }, [selected]);

  const changeTabFocus = (e: KeyboardEvent): void => {
    switch (e.key) {
      case 'ArrowLeft':
        valuesArrayRef.current[focus.current]?.setAttribute('tabindex', '-1');
        focus.current =
          focus.current === 0 ? values.length - 1 : focus.current - 1;
        valuesArrayRef.current[focus.current]?.setAttribute('tabindex', '0');
        valuesArrayRef.current[focus.current]?.focus();
        break;
      case 'ArrowRight':
        valuesArrayRef.current[focus.current]?.setAttribute('tabindex', '-1');
        focus.current =
          focus.current === values.length - 1 ? 0 : focus.current + 1;
        valuesArrayRef.current[focus.current]?.setAttribute('tabindex', '0');
        valuesArrayRef.current[focus.current]?.focus();
        break;
      default:
        break;
    }
  };

  const constructUnderlineIndicators = (selected: number) => {
    const updatedArr = values.map((text: string, i: number) => (
      <button
        ref={(tab) => valuesArrayRef.current?.push(tab)}
        role="tab"
        className={styles.underlineButton}
        onClick={() => {
          setSelected(i);
        }}
        aria-selected={selected === i}
        key={`${text}Indicator`}
        aria-controls={`${text}-tabpanel`}
        tabIndex={focus.current === i ? 0 : -1}
        onKeyDown={changeTabFocus}
        id={`${text}-tab`}
      >
        {text}
      </button>
    ));
    setValuesArr(updatedArr);
  };

  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      aria-label="destination list"
      className={cn(styles.underlineList, className)}
      {...props}
    >
      {valuesArr}
    </div>
  );
};
