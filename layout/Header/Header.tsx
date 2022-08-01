import { HeaderProp } from './Header.props';
import cn from 'classnames';
import style from './Rating.module.css';


export const Header = ({...props}: HeaderProp): JSX.Element => {
    return (
        <div {...props}>
            Header
        </div>
    );
};

