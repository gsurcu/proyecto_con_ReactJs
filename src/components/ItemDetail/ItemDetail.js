import React from "react";
import { useNavigate } from "react-router";

export const ItemDetail = ({id,name,price,img,marca}) => {

  const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleVolverInicio = () => {
        navigate('/')
    }

    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{marca}</p>
            <p>Precio: ${price}</p>

            {/* contador con opcion de agregar */}

            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>
            <button className="btn btn-outline-primary" onClick={handleVolverInicio}>Volver al inicio</button>
        </div>
    )
}