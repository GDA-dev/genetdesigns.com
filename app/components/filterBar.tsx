import React, { useState } from "react";
import { useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button } from '@chakra-ui/react';
import CategoryFilter from "../components/categoryFilter";
import SizeFilter from "../components/sizeFilter";
import GenderFilter from "../components/genderFilter";
import fetchFilter from "../../utils/fetchFilter";
import { IoFilterCircleSharp } from "react-icons/io5";
import { Clothing } from "../../utils/types";

interface FilterBarProps {
    saleClothes: Clothing[];
    sendFilteredClothes: (filteredClothes?: Clothing[]) => void;
};

const FilterBar: React.FC<FilterBarProps> = ({ saleClothes, sendFilteredClothes }) => {

    const [filterSelection, setFilterSelection] = useState({ category: "", size: "", gender: "" });
    const { isOpen, onOpen, onClose } = useDisclosure();
   
    const handleFilterSelection = async (filter: string, filterType: string) => {

        if (filterType === "category") {

            const res = await fetchFilter(filterSelection, "sale");
            setFilterSelection(prevSelection => ({...prevSelection, category: filter}));
            sendFilteredClothes(res);

        } else if (filterType === "size") {
            
            const res = await fetchFilter(filterSelection, "sale");
            setFilterSelection(prevSelection => ({...prevSelection, size: filter}));
            sendFilteredClothes(res);
            
        } else if (filterType === "gender") {

            const res = await fetchFilter(filterSelection, "sale");
            setFilterSelection(prevSelection => ({...prevSelection, gender: filter}));
            sendFilteredClothes(res);
            
        } else if (filterType === "clear") {

            setFilterSelection({ category: "", size: "", gender: "" });
            sendFilteredClothes(saleClothes);

        };
    };

    return (
        <>
            <Button colorScheme='white' onClick={onOpen}>
                <IoFilterCircleSharp id='FilterOpen' style={{ color: "black", height: "7vh", width: "100%" }} />
            </Button>
            <Drawer isOpen={isOpen} placement='right' onClose={onClose} size="sm">
                <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton size="lg" />
                        <DrawerHeader>Filter</DrawerHeader>
                        <DrawerBody>
                            <div id="AllSaleCategoryFilterContainer" style={{ margin: "15px 0" }}>
                                <CategoryFilter currentOptions={saleClothes} sendSelectedFilter={(filter: string) => handleFilterSelection(filter, "category")} />
                            </div>
                            <div id="AllSaleSizeFilterContainer" style={{ margin: "15px 0" }}>
                                <SizeFilter currentOptions={saleClothes} sendSelectedFilter={(filter: string) => handleFilterSelection(filter, "size")} />
                            </div>
                            <div id="AllSaleGenderfilterContainer" style={{ margin: "15px 0" }}>
                                <GenderFilter currentOptions={saleClothes} sendSelectedFilter={(filter: string) => handleFilterSelection(filter, "gender")} />
                            </div>
                            <div id="AllSaleClearFilterContainer" style={{ margin: "15px 0" }}>
                                <Button colorScheme="pink" variant="solid" onClick={() => handleFilterSelection("clear", "clear")}>Clear</Button>
                            </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default FilterBar;