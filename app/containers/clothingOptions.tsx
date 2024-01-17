import React from "react";
import ClothingCard from "../components/clothingCard";
import { Sale, Sold } from "../../utils/types";

interface ClothingOptionsProps {
    latestSale: Sale;
    latestSold: Sold; 
};

const ClothingOptions: React.FC<ClothingOptionsProps> = ({ latestSale, latestSold }) => {
    
    
    
    return (
        <div id="ClothingOptions">
            <div id="ClothingOptionsContainer">
                <div id="ClothingOptionsHeaderContainer">
                    <p id="ClothingOptionsHeader">Clothing Options</p>
                </div>
                <div id="ClothingOptionsCardsContainer">
                    <div id="ClothingOptionsSaleContainer">
                        <ClothingCard clothing={latestSale} inWishlist={false} />
                    </div>
                    <div id="ClothingOptionsSoldContainer">
                        <ClothingCard clothing={latestSold} inWishlist={false} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClothingOptions;