import { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  isFlipped: boolean;
}
