import { useState, useEffect} from "react";
import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { db } from '../firebase/config'

export const useCollection = (name, catId) => {
  
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState([])

  useEffect(() => {
		setLoading(true)

		const productodRef = collection(db, name)
		const q = catId ? query(productodRef, where('marca', '==', catId)) : productodRef

		getDocs(q)
			.then((collection) => {
				const items = collection.docs.map((doc) => ({
					id: doc.id,
					...doc.data()
				}))
				setData(items)
			})
			.finally(() => {
				setLoading(false)
			})
		
	}, [catId])

  return {
    loading,
    data
  }

}