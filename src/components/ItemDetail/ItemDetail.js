import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useCounter } from "../../hooks/useCounter";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.scss";

export const ItemDetail = ({id, name, price, img, marca, stock}) => {

	const {agregarAlCarrito, isInCart} = useContext(CartContext)
	const { counter, sumar, restar } = useCounter(0,stock,0)

	const navigate = useNavigate()

	const handleVolver = () => {
			navigate(-1)
	}

	const handleVolverInicio = () => {
			navigate('/')
	}

	const handleAgregar = () => {
		if (counter > 0) {
			agregarAlCarrito({
				id,
				name,
				price,
				img,
				marca,
				stock,
				cantidad: counter
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
							cantidad={counter} 
							sumar={sumar}
							restar={restar}
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