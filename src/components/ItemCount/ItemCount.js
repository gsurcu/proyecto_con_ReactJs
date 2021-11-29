import React from "react";
import "./ItemCount.scss";

export const ItemCount = ({max, setCantidad, cantidad, onAdd}) => {

  // const [count, setCount] = useState(0)

  const handleRestar = () => {
    cantidad > 0 && setCantidad( cantidad - 1)
}

  const handleSumar = () => {
    cantidad < max && setCantidad( cantidad + 1 )
}


  return (
    <div className="item-count">
      <button className="btn" onClick={handleRestar} disabled={cantidad === 0}>
          -
      </button>
      <div className="count">{cantidad}</div>
      <button className="btn" onClick={handleSumar} disabled={cantidad ===max}>
          +
      </button>
      <button className="btn agregar" onClick={onAdd}>
          Agregar al carrito
      </button>
    </div>
  )
}