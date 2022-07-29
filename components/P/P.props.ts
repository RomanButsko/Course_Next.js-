import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IP extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> { 
    text?: '16' |  '14' | '18';
    children: ReactNode;
} 