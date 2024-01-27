import React from "react";
import { Heading, Text, Stack } from '@chakra-ui/react'
import { Clothing } from "../../utils/types";

interface IndividualClothingProps {
    clothing: Clothing;
    category: string;
    size: string;
    gender: string;
};

const IndividualClothing: React.FC<IndividualClothingProps> = ({ clothing, category, size, gender }) => {

    

    return (
        <>
            <div id="IndividualClothing">
                <div id="IndividualClothingContainer">
                    <div id="IndividualClothingLeftContainer">
                            {/* {clothing.gallery.map((gallery: any) => (
                                <div id="IndividualClothingGalleryContainer">
                                    <img src={gallery} alt="Gallery of Clothing Item" id="IndividualClothingGallery" />
                                </div>
                            ))} */}
                            <img id="IndividualClothingThumbnail" src={clothing.thumbnail} alt="Clothing Item Picture" />
                    </div>
                    <div id="IndividualClothingRightContainer">
                        <div id="IndividualClothingStackBackground" />
                        <Stack id="IndividualClothingStack" spacing={10}>
                            <Heading size='4xl'>{clothing.title}</Heading>
                            {clothing.price ? (
                                <Text fontSize='3xl'>${clothing.price}</Text>
                            ) : (
                                <Text>Sold Out</Text>
                            )}
                            <Text fontSize='2xl'>{clothing.description}</Text>
                            <Text fontSize='lg'>Category: {category}</Text>
                            <Text fontSize='lg'>Size: {size}</Text>
                            <Text fontSize='lg'>Gender: {gender}</Text>
                            <Text fontSize='lg'>Measurements: {clothing.measurements}</Text>
                            {clothing.notes ? (
                                <Text fontSize='md'>Notes: {clothing.notes}</Text>
                            ) : (
                                <Text>No Notes</Text>
                            )}
                        </Stack>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IndividualClothing;