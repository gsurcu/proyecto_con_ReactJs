import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router'
import { CartContext } from '../../context/CartContext'
import { validarDatos } from '../../helpers/validarDatos'
import './Checkout.scss'
import { generarOrden } from '../../firebase/generarOrden'

export const Checkout = () => {

	const {carrito, totalCompra, vaciarCarrito} = useContext(CartContext)

	const [values, setValues] = useState({
		nombre: '',
		apellido: '',
		email: '',
		emailConfirm: '',
	})

	const handleInputChange = (e) => {        
			setValues({
					...values,
					[e.target.name]: e.target.value
			})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!validarDatos(values)) { return }

		generarOrden(values, carrito, totalCompra, vaciarCarrito)
	}


	return (

		<>
			{carrito.length === 0 
				? <Navigate to="/"/>
				:
					<div className="checkout">
						<h2>Resumen de compra</h2>
						<hr/>

						<form onSubmit={handleSubmit}>
							<input
								onChange={handleInputChange}
								name="nombre"
								value={values.nombre}
								className="checkout-input"
								type="text"
								placeholder="Nombre"
							/>
							{values.nombre.length < 4 && <small>Nombre inválido</small>}

							<input
								onChange={handleInputChange}
								name="apellido"
								value={values.apellido}
								className="checkout-input"
								type="text"
								placeholder="Apellido"
							/>
							{values.apellido.length < 4 && <small>Apellido inválido</small>}

							<input
								onChange={handleInputChange}
								name="email"
								value={values.email}
								className="checkout-input"
								type="email"
								placeholder="Email"
							/>
							{values.email.length < 4 && <small>Email inválido</small>}

							<input
								onChange={handleInputChange}
								name="emailConfirm"
								value={values.emailConfirm}
								className="checkout-input"
								type="email"
								placeholder="Repita email"
							/>
							{values.emailConfirm !== values.email && <small>Email no coincide</small>}

							<button type="submit" className="checkout-btn">Enviar</button>
						</form>
					</div>
			}
		</>
	)
}