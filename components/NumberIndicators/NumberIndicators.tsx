import { NumberIndicatorsProps } from './NumberIndicators.props';
import styles from './NumberIndicators.module.css';
import {
  FC,
  Fragment,
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
} from 'react';
import cn from 'classnames';

export const NumberIndicators: FC<NumberIndicatorsProps> = ({
  selected,
  setSelected,
  values,
  className,
  orientation,
  ...props
}) => {
  const [numberArr, setNumberArr] = useState<JSX.Element[]>(
    values.map((text) => <Fragment key={`${text}-fragment`}></Fragment>)
  );
  const valuesArrayRef = useRef<(HTMLButtonElement | null)[]>([]);
  const focus = useRef<number>(0);

  useEffect(() => {
    constructNumberIndicators(selected);
  }, [selected]);

  const changeNumberFocus = (e: KeyboardEvent): void => {
    switch (e.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
        if (e.key === 'ArrowUp' && orientation === 'x') break;
        valuesArrayRef.current[focus.current]?.setAttribute('tabindex', '-1');
        focus.current =
          focus.current === 0 ? values.length - 1 : focus.current - 1;
        valuesArrayRef.current[focus.current]?.setAttribute('tabindex', '0');
        valuesArrayRef.current[focus.current]?.focus();
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        if (e.key === 'ArrowDown' && orientation === 'x') break;
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

  const constructNumberIndicators = (selected: number) => {
    const updatedArr = values.map((text: string, i: number) => {
      return (
        <button
          role="tab"
          className={styles.numButton}
          onClick={() => {
            setSelected(i);
          }}
          aria-selected={selected === i}
          ref={(number) => valuesArrayRef.current?.push(number)}
          key={`${text}NumberIndicator`}
          aria-controls={`${text}-tabpanel`}
          tabIndex={focus.current === i ? 0 : -1}
          onKeyDown={changeNumberFocus}
          id={`${text}-tab`}
        >
          {i + 1}
          <span className="sr-only">{text}</span>
        </button>
      );
    });
    setNumberArr(updatedArr);
  };

  return (
    <div
      className={cn(
        styles.numList,
        { [styles.vertical]: orientation === 'y' },
        className
      )}
      role="tablist"
      aria-orientation={orientation === 'x' ? 'horizontal' : 'vertical'}
      aria-label="technology list"
      {...props}
    >
      {numberArr}
    </div>
  );
};
