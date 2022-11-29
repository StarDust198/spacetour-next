import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PlanetBlockProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  description: string;
  distance: string;
  time: string;
}
