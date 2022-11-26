import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface DotIndicatorsProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  selected: number;
  setSelected: (num: number) => void;
  total: number;
}
