import { SidebarProp } from './menu.props';
import cn from 'classnames';
import style from './menu.module.css';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { firstLevelMenu, Page } from '../../interfaces/menu.interfaces';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstMenu } from '../../helper/helpers';

export const Menu = ({...props}: SidebarProp): JSX.Element => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);
    const router = useRouter();
    
    const openCategory = (secondCategory: string) => {
        setMenu && setMenu(menu.map((m) => {
            if (m._id.secondCategory == secondCategory) {
                m.isOpened = !m.isOpened ;
                }
                return m;
            }));
    };

    const buildFirstLevel = () => {
        return (
            <>
            {firstMenu.map((item) => (
                <div key={item.route}>
                    <Link href="`/${route`}">
                    <a>
                        <div className={cn(style.firstLevel, {
                            [style.activeFirstLevel]: item.id == firstCategory
                        })}>
                            {item.name}
                        </div>
                    </a>
                    </Link>
                    {item.id == firstCategory && buildSecondLevel(item) }
                </div>
            ))}
            </>
        )
    }

    const buildSecondLevel = (menuI: firstLevelMenu) => {
        return (
            <div className={style.secondBlock}>
                {menu.map(i => {
                    if (i.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        i.isOpened = true;
                    }
                    return (
                    <div key={i._id.secondCategory}>
                        <div className={style.secondLevel} onClick={() => openCategory(i._id.secondCategory)} >
                            {i._id.secondCategory}
                        </div>
                        <div className={cn(style.secondLevelBlock, {[style.secondLevelBlockOpened]: i.isOpened})}>
                            {buildThirdLevel(i.pages, menuI.route)}
                        </div>
                    </div>
                )} )}
            </div>
            
        );
    };

    const buildThirdLevel = (pages: Page[], route: string) => {
        return (
            <div>
                {pages.map(p => (
                    <Link key={p._id} href={`/${route}/${p.alias}`}>
                    <a className={cn(style.thirdLevel, {
                        [style.thirdLevelAcrive]: `/${route}/${p.alias}` == router.asPath
                    })}>
                        {p.category}
                    </a>
                    </Link>
                ))}
            </div>
        );
    };

    return (
        <div className={style.menu}>
            {buildFirstLevel()}
        </div>
    );
};
