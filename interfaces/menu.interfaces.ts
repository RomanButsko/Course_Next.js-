import { LevelCategory } from './page.interfaces';

    export interface Page {
        alias: string;
        title: string;
        _id: string;
        category: string;
    }

    export interface RootObject {
        _id: {
            secondCategory: string; 
        };
        isOpened: boolean;
        pages: Page[];
    }


    export interface firstLevelMenu {
        route: string
        name: string
        icon: JSX.Element
        id: LevelCategory
    }