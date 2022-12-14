export enum LevelCategory {
    Courses,
    Services,
    Books,
    Products
}

export interface PageAdvantage {
    title: string;
    description: string;
    _id: string;
}

export interface HhData {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
    updatedAt: Date;
    _id: string;
}

export interface Blog {
    h1: string;
    metaTitle: string;
    metaDescription: string;
    views: number;
    _id: string;
}

export interface Sravnikus {
    metaTitle: string;
    metaDescription: string;
    qas: any[];
    _id: string;
}

export interface Learningclub {
    metaTitle: string;
    metaDescription: string;
    qas: any[];
    _id: string;
}

export interface PageModal {
    _id: string;
    tags: string[];
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    seoText: string;
    tagsTitle: string;
    metaTitle: string;
    metaDescription: string;
    firstCategory: LevelCategory;
    advantages: PageAdvantage[];
    createdAt: Date;
    updatedAt: Date;
    hh: HhData;
    qas: any[];
    addresses: any[];
    categoryOn: string;
    blog: Blog;
    sravnikus: Sravnikus;
    learningclub: Learningclub;
}

