import { DotIndicatorsProps } from './DotIndicators.props';
import styles from './DotIndicators.module.css';
import {
  FC,
  useEffect,
  useState,
  KeyboardEvent,
  useRef,
  Fragment,
} from 'react';
import cn from 'classnames';

export const DotIndicators: FC<DotIndicatorsProps> = ({
  selected,
  setSelected,
  values,
  className,
  ...props
}) => {
  const [dotArr, setDotArr] = useState<JSX.Element[]>(
    values.map((text) => <Fragment key={`${text}-fragment`}></Fragment>)
  );
  const valuesArrayRef = useRef<(HTMLButtonElement | null)[]>([]);
  const focus = useRef<number>(0);

  useEffect(() => {
    constructDotIndicators(selected);
  }, [selected]);

  const changeDotFocus = (e: KeyboardEvent): void => {
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

  const constructDotIndicators = (selected: number) => {
    const updatedArr = values.map((text: string, i: number) => {
      return (
        <button
          ref={(dot) => valuesArrayRef.current?.push(dot)}
          role="tab"
          className={styles.dotButton}
          onClick={() => {
            setSelected(i);
          }}
          aria-selected={selected === i}
          key={`${text}DotIndicator`}
          aria-controls={`${text}-tabpanel`}
          tabIndex={focus.current === i ? 0 : -1}
          onKeyDown={changeDotFocus}
          id={`${text}-tab`}
        >
          <span className="sr-only">{text}</span>
        </button>
      );
    });
    setDotArr(updatedArr);
  };

  return (
    <div
      className={cn(styles.dotList, className)}
      role="tablist"
      aria-orientation="horizontal"
      aria-label="crew list"
      {...props}
    >
      {dotArr}
    </div>
  );
};
