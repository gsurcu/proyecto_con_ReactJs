import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.scss";

export const ItemDetail = ({id, name, price, img, marca, stock}) => {

    const navigate = useNavigate()

    const [cantidad, setCantidad] = useState(0)
    const [agregado, setAgregado] = useState(false)

    const handleVolver = () => {
        navigate(-1)
    }

    const handleVolverInicio = () => {
        navigate('/')
    }

    const handleAgregar = () => {
        if (cantidad > 0) {
            console.log('Item agregado:', {
                id,
                name,
                price,
                cantidad
            })
            setAgregado(true)
        }   
    }

    return (
        <div className="card detail">
            <h2 className="card-title titulo">{name}</h2>
            <img className="card-img" src={img} alt={name}/>
            <div className="card-info">
                <p>{marca}</p>
                <p>Precio: ${price}</p>

                {/* contador con opcion de agregar */}
                {
                    !agregado 
                    ?   <ItemCount 
                            max={stock} 
                            cantidad={cantidad} 
                            setCantidad={setCantidad}
                            onAdd={handleAgregar}
                        />
                    :   <Link to="/cart" className="btn">Terminar mi compra</Link>
                }
            </div>

            <button className="btn" onClick={handleVolver}>Volver</button>
            <button className="btn" onClick={handleVolverInicio}>Volver al inicio</button>

        </div>
    )
}