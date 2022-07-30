import { TagProps } from './Tag.props';
import cn from 'classnames';
import style from './Tag.module.css';

export const Tag = ({fz = '14', className ,children, href = '#', ...props}: TagProps): JSX.Element => {
    return (
        <>
        <div className={cn(style.tag, className, {
            [style.s]: fz == '12',
            [style.sm]: fz == '12Up',
            [style.l]: fz == '14',
            [style.lm]: fz == '14Up',
        })}> {
            href ?
            <a href= {href} >{children}</a>
            : <>{children}</>
        } </div>
        </>
    );
};