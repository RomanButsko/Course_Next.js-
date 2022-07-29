import { IP } from './P.props';
import cn from 'classnames';
import style from './P.module.css';

export const PComponent = ({text = '14', className ,children, ...props}: IP): JSX.Element => {
    return (
        <>
        <p className={cn(style.p, className, {
            [style.p18]: text == '18',
            [style.p16]: text == '16',
            [style.p14]: text == '14',
        })}> {children} </p>
        </>
    );
};