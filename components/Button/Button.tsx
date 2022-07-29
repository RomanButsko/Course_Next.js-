import style from './Button.module.css';
import { IBtn } from './Button.props';
import cn from 'classnames';
import Vector from './Vector.svg';


export const Button = ({type, children, line = "none", className, ...props}: IBtn): JSX.Element => {
    return <>
    <button className={cn(style.button, className, {
        [style.primary]: type == 'primary',
        [style.other]: type == 'other',
    })} {...props}>
        {children}
        {line != 'none' && <span className={cn(style.line, { 
        [style.down]: line == 'down'
        })}>
            {/* <Vector />  */}
        </span>}
    </button>
    </>;
};