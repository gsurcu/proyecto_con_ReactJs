import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemListContainer = ( {greeting} ) => {

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemCount />
        </div>
    )
}