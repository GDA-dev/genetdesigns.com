export interface Sale {
    id?: number;
    title: string;
    description: string;
    category: string;
    size: string;
    measurements: string;
    gender: string;
    price: number;
    notes?: string;
    thumbnail: string;
    gallery: string[];
};

export interface Sold {
    id?: number;
    title: string;
    description: string;
    category: string;
    size: string;
    measurements: string;
    gender: string;
    notes?: string;
    thumbnail: string;
    gallery: string[];
};

export interface Admin {
    name: string;
    password: string;
};

export interface Clothing {
    id?: number;
    title: string;
    description: string;
    category: string;
    size: string;
    measurements: string;
    gender: string;
    price?: number;
    notes?: string;
    thumbnail: string;
    gallery: any;
    saleClothes?: any;
    soldClothes?: any;
};

export interface Category {
    CT: string;
    CB: string;
    CO: string;
    A: string;
    O: string;
};

export interface Size {
    XXS: string;
    XS: string;
    S: string;
    M: string;
    L: string;
    XL: string;
    XXL: string;
    OS: string;
};

export interface Gender {
    M: string;
    F: string;
    U: string;
};