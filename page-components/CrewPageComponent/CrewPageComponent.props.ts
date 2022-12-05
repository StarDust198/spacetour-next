import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CrewItem } from '../../interfaces/crew.interface';

export interface CrewPageComponentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  crew: CrewItem[];
}
