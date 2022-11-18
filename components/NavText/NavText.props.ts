import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface NavTextProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  place: 'menu' | 'page' | 'info';
  children: ReactNode;
}
