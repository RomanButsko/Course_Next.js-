import { SidebarProp } from './Sidebar.props';
import cn from 'classnames';
import style from './Rating.module.css';


export const Sidebar = ({...props}: SidebarProp): JSX.Element => {
    return (
        <div {...props}>
            Sidebar
        </div>
    );
};

