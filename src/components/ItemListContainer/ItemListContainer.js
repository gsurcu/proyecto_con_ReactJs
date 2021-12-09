import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import { ItemList } from "../ItemList/ItemList";
import { Loader } from "../Loader/Loader";
import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { db } from '../../firebase/config'


export const ItemListContainer = () => {
	
	const [loading, setLoading] = useState(false)
	const [productos, setProductos] = useState([])

	const { catId } = useParams()

	useEffect(() => {
		setLoading(true)

		const productodRef = collection(db, 'productos')
		const q = catId ? query(productodRef, where('marca', '==', catId)) : productodRef

		getDocs(q)
			.then((collection) => {
				const items = collection.docs.map((doc) => ({
					id: doc.id,
					...doc.data()
				}))
				console.log(collection.docs.map(doc => doc.data()))
				setProductos(items)
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