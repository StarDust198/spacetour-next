import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface HeadingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  place: 'home' | 'nav' | 'pageDestination' | 'pageOther' | 'sub';
  children: ReactNode;
}
