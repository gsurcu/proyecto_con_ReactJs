import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.scss";

export const CartWidget = () => {
	
	const {totalCantidad} = useContext(CartContext)

	return (
	<button className="cart not-style-button" disabled={totalCantidad() === 0}>
		<div className={`cont-widget ${totalCantidad() === 0 ? 'widget-disabled' : ''}`}>
			<FaShoppingCart className="cartWidget"/>
			<span className="textWidget">{totalCantidad()}</span>
		</div>
	</button>
	)
}