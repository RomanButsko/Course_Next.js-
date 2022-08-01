import { FooterProp } from './Footer.props';
import cn from 'classnames';
import style from './Rating.module.css';


export const Footer = ({...props}: FooterProp): JSX.Element => {
    return (
        <div {...props}>
            Fotter
        </div>
    );
};

