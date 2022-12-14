import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

export interface HomeButtonProps
  extends Omit<
    DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    'ref'
  > {}
