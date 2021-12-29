import React from "react";
import { btnConfig } from "./btnConfig";
import "./ItemCount.scss";

export const ItemCount = ({sumar, restar, cantidad, onAdd, max}) => {

  const config = btnConfig(cantidad, max)
  return (
    <div className="item-count">
      <button {...config.restar} onClick={restar}>
          -
      </button>
      <div className="count">{cantidad}</div>
      <button {...config.sumar} onClick={sumar}>
          +
      </button>
      <button
        className="btn agregar"
        onClick={onAdd}
        disabled={cantidad === 0}>
          Agregar al carrito
      </button>
    </div>
  )
}