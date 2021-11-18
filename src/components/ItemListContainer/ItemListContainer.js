import React, {useState, useEffect} from "react";
// import { ItemCount } from "../ItemCount/ItemCount";
// import { ItemList } from "../ItemList/ItemList";


export const ItemListContainer = () => {
	
	const [loading, setLoading] = useState(false)

	const pedirDatos = () => {
		return new Promise((resolve,reject) => {
			
			setTimeout(() => {
				resolve("Promesa resuelta")
			}, 2000)
		})
	}

	useEffect(() => {

		setLoading(true)
		pedirDatos()
		.then( (resp) => {
			console.log(resp)
		})
		.catch( (error) => {
			console.log(error)
		})
		.finally(() => {
			setLoading(false)
		})
		
	}, [])

	return (
		<div>
			<h2>Proyecto con ReactJS</h2>
			{/* <ItemCount /> */}
			{/* <ItemList /> */}

			{
				loading 
				? <h2>Cargando...</h2> 
				: <h2>Productos Listos</h2>
			}
		</div>
	)
}