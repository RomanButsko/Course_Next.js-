import { createContext, PropsWithChildren, ReactNode, useState } from 'react';
import { RootObject } from '../interfaces/menu.interfaces';
import { LevelCategory } from '../interfaces/page.interfaces';

export interface IAppContext {
    menu: RootObject[];
    firstCategory: number;
    setMenu?:(newMenu: RootObject[]) => void
}

export const AppContext = createContext<IAppContext>({menu: [], firstCategory: LevelCategory.Courses});

export const AppContextProvider = ({menu, children, firstCategory}: PropsWithChildren<IAppContext>): JSX.Element => {

    const [menuState, setMenuState] = useState<RootObject[]>(menu);
    const setMenu = (newMenu: RootObject[]) => {
        setMenuState(newMenu);
    }

    return <AppContext.Provider value={{menu: menuState, firstCategory, setMenu: setMenu,}}>
        {children}
    </AppContext.Provider>;
} 