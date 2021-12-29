import React from "react";
import { Link } from "react-router-dom";
import "./Item.scss";

export const Item = ({id,name,price,img,marca}) => {

  return (
    <article key={id} className="container-card">
      <div className="card">
        <img src={img} alt={name}/>
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">Precio: ${price}</p>
          {/* <p className="card-text marca">{marca}</p> */}
          {/* <button className="btn btn-primary">Agregar</button> */}
          <Link to={`/detail/${id}`} className="btn">Ver mas</Link>
        </div>
      </div>
    </article>
  )
}