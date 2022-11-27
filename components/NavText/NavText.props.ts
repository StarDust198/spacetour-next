import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface NavTextProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  place: 'menu' | 'page' | 'info';
  children: ReactNode;
}
