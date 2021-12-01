import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.scss";

export const ItemDetail = ({id, name, price, img, marca, stock}) => {

	const {agregarAlCarrito, isInCart} = useContext(CartContext)

	const navigate = useNavigate()

	const [cantidad, setCantidad] = useState(0)

	const handleVolver = () => {
			navigate(-1)
	}

	const handleVolverInicio = () => {
			navigate('/')
	}

	const handleAgregar = () => {
		if (cantidad > 0) {
			agregarAlCarrito({
				id,
				name,
				price,
				img,
				cantidad
			})
		}   
	}

	return (
		<div className="item">
			<h2 className="item-title titulo">{name}</h2>
			<img className="item-img" src={img} alt={name}/>
			<div className="item-info">
				<p className="marca">{marca}</p>
				<p>Precio: ${price}</p>

				{/* contador con opcion de agregar */}
				{
					!isInCart(id)
					? <ItemCount 
							max={stock} 
							cantidad={cantidad} 
							setCantidad={setCantidad}
							onAdd={handleAgregar}
						/>
					: <Link to="/cart" className="btn btn-success d-block">Terminar mi compra</Link>
				}
			</div>

			<button className="btn" onClick={handleVolver}>Volver</button>
			<button className="btn" onClick={handleVolverInicio}>Volver al inicio</button>

		</div>
	)
}