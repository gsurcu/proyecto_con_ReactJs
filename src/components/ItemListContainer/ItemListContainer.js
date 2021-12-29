import React from "react";
import { useParams } from "react-router";
import { ItemList } from "../ItemList/ItemList";
import { Loader } from "../Loader/Loader";
import { useCollection } from "../../hooks/useCollection";

export const ItemListContainer = () => {
	
	const { catId } = useParams()
	const { loading, data } = useCollection('productos',catId)

	return (
		<>
			{
				loading 
				? <Loader />
				: <ItemList items={data}/>
			}
		</>
	)
}