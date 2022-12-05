import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { DestinationItem } from '../../interfaces/destination.interface';

export interface DestinationPageComponentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  destinations: DestinationItem[];
}
