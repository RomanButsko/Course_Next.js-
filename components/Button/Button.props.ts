import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface IBtn extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    type: "primary" | "other";
    children: ReactNode;
    line?: "right" | "down" | "none";
}