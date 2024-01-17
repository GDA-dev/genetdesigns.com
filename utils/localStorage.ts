import { Clothing } from "./types";

export const getWishlistItems = () => {

    const wishlistString = localStorage.getItem('wishlist');
    const wishlist = wishlistString ? JSON.parse(wishlistString) : []; 
    return wishlist;
    
};

export const addToWishlist = (clothing: Clothing) => {

    const wishlistString = localStorage.getItem("wishlist");
    const wishlist = wishlistString ? JSON.parse(wishlistString) : [];
    const clothingString = JSON.stringify(clothing);

    if (wishlist.length === 0) {

        localStorage.setItem("wishlist", `[${clothingString}]`);
        return true;

    } else {

        const found = wishlist.find((item: Clothing) => item === clothing);

        if (found) {
            return true;
        } else {
            const updatedWishlist = wishlist.append(clothing);
            localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
            return true;

        };
    };
};

export const deleteFromWishlist = (clothing: Clothing) => {

    const wishlistString = localStorage.getItem("wishlist");
    const wishlist = wishlistString ? JSON.parse(wishlistString) : [];

    if (wishlist.length !== 0) {
        const found = wishlist.find((item: Clothing, index: number) => {
            if (item === clothing) {
                return index;
            };
        });
        if (found) {
            const updatedWishlist = wishlist.splice(found, 1);
            localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
            return false;
        };
    };

    return false;

};