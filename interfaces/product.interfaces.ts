
    export interface ProductCharacteristic {
        name: string;
        value: string;
    }

    export interface ProductBlog {
        text: string;
        _id: string;
        bigImage: string;
    }

    export interface ReviewModal {
        _id: string;
        name: string;
        title: string;
        description: string;
        rating: number;
        createDate: Date
    }

    export interface ProductModel {
        _id: string;
        categories: string[];
        tags: string[];
        title: string;
        image: string;
        description: string;
        link: string;
        price: number;
        credit: number;
        oldPrice: number;
        characteristics: ProductCharacteristic[];
        advantages: string;
        initialRating: number;
        createdAt: Date;
        updatedAt: Date;
        __v: number;
        html: string;
        blog: ProductBlog;
        companyId: string;
        clicks: number;
        reviews: ReviewModal;
        reviewCount: number;
        reviewAvg?: any;
    }
