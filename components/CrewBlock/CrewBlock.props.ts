import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CrewBlockProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  description: string;
  rank: string;
}
