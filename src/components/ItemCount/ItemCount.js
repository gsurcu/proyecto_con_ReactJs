import React, {useState, useEffect} from "react";
import "./ItemCount.scss";

export const ItemCount = () => {

  const [count, setCount] = useState(0)

  const handleAnterior = () => {
    count > 0 && setCount( count - 1)
}

  const handleSiguiente = () => {
    setCount( count + 1 )
}

useEffect(() => {
  console.log("Me monté")

  return () => {
    console.log("Me desmonté")
  }
}, [])

useEffect(() => {
  console.log('Clicks actualizados')

}, [count])

  return (
    <div className="item-count">
      <button className="btn" onClick={handleAnterior} disabled={count === 0}>
          -
      </button>
      <div className="count">{count}</div>
      <button className="btn" onClick={handleSiguiente}>
          +
      </button>
    </div>
  )
}