import React from "react";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import getSoldClothingByID from "../../services/GET/getSoldClothingByID";
import SoldByID from "../containers/soldByID";

export const meta: MetaFunction = () => {
    return [
        { title: "Sold Clothing" },
        { name: "description", content: "Welcome to Genet Design's and Alterations!" },
    ];
};

export async function loader({ params }: LoaderFunctionArgs) {
    const res: any = await getSoldClothingByID(String(params.id));
    return res;
};


export default function SoldByIDPage() {
    
    const soldClothingByID = useLoaderData<typeof loader>();
    
    return (
        <>
            <SoldByID soldClothing={soldClothingByID[0]} />
        </>
    );
};