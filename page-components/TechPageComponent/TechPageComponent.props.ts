import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TechItem } from '../../interfaces/technology.interface';

export interface TechPageComponentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  technology: TechItem[];
}
