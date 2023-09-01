import React from "react";
import ItemListContainer from "../components/itemListComponents/ItemListContainer";
import { useParams } from "react-router-dom";

const ItemList = () => {
    const {categoryid} = useParams()

    

    return(
        
        < ItemListContainer categoryid = {categoryid} />
    )
}

export default ItemList;