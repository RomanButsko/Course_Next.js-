import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IBtn extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    type: "primary" | "other";
    children: ReactNode;
    line?: "right" | "down" | "none";
}