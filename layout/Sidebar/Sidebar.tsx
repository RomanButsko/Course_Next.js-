import { SidebarProp } from './Sidebar.props';
import cn from 'classnames';
import style from './Sidebar.module.css';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { firstLevelMenu, Page } from '../../interfaces/menu.interfaces';
import { LevelCategory } from '../../interfaces/page.interfaces';
import Image from 'next/image';
import { Menu } from '../menu/Menu';

const firstMenu: firstLevelMenu[] = [
    {route: 'courses', name: 'Курсы', icon:  <Image src={'#'} alt='star.svg' width='50px' height='50px' />, id: LevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon:  <Image src={'#'} alt='star.svg' width='50px' height='50px' />, id: LevelCategory.Services},
    {route: 'books', name: 'Книги', icon:  <Image src={'#'} alt='star.svg' width='50px' height='50px' />, id: LevelCategory.Books},
    {route: 'products', name: 'Продукты', icon:  <Image src={'#'} alt='star.svg' width='50px' height='50px' />, id: LevelCategory.Products}
];

export const Sidebar = ({...props}: SidebarProp): JSX.Element => {
    return (
        <div {...props}>
            <Menu />
        </div>
    )
};

