import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface SubheadingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  size?: 'big' | 'small';
  children: ReactNode;
}
