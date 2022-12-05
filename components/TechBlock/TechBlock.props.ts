import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TechBlockProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  description: string;
  rank: string;
}
