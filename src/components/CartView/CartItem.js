import React, { useContext } from 'react'
import { TiDelete } from "react-icons/ti";
import { CartContext } from '../../context/CartContext'
import './Cart.scss';

export const CartItem = ({name, price, cantidad, id}) => {

  const {removerDelCarrito} = useContext(CartContext)

  return (
    <div className='cart-item'>
      <span className='item-title'>{name}</span>
      <div className='item-cant'>
      <div className='cant'>
        <span className='center'>{cantidad}</span>
      </div>
      </div>
      <span className='item-price'>${price}</span>
      <button 
          className="not-style-button item-delete"
          onClick={() => { removerDelCarrito(id) }}
      >
          <TiDelete />
      </button>
    </div>
  )
}