import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface NumberIndicatorsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  selected: number;
  setSelected: (num: number) => void;
  values: string[];
  orientation: string;
}
