import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface UnderlineIndicatorsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  selected: number;
  setSelected: (num: number) => void;
  values: string[];
}
