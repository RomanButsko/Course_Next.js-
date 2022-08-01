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
        pages: Page[];
    }

