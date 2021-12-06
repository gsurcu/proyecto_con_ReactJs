import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import { pedirDatos } from "../../helpers/pedirDatos";
import { ItemList } from "../ItemList/ItemList";
import { Loader } from "../Loader/Loader";


export const ItemListContainer = () => {
	
	const [loading, setLoading] = useState(false)
	const [productos, setProductos] = useState([])

	const { catId } = useParams()

	useEffect(() => {

		setLoading(true)
		pedirDatos()
			.then( (resp) => {
				if (!catId) {
					setProductos(resp)
				} else {
					setProductos( resp.filter( prod => prod.marca === catId) )
				}
			})
			.catch( (error) => {
				console.log(error)
			})
			.finally(() => {
				setLoading(false)
			})
		
	}, [catId])

	return (
		<>
			{
				loading 
				? <Loader />
				: <ItemList items={productos}/>
			}
		</>
	)
}