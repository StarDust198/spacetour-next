import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface UnderlineIndicatorsProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  selected: number;
  setSelected: (num: number) => void;
  values: string[];
}
