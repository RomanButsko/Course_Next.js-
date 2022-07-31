import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LayoutProp extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { 
    children: ReactNode;
} 