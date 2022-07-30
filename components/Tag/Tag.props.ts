import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { 
    fz: '14' | '14Up' | '12' | '12Up'
    children: ReactNode;
    size?: 's' | 'sm' | 'l' | 'lm';
    href?: string 
} 