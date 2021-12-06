import React, { useContext } from 'react'
// import { BsFillTrashFill } from 'react-icons/bs'
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
        {/* <span className="cant-cont-btn">
          <button className="not-style-button cant-btn">+</button>
          <button className="not-style-button cant-btn">-</button>
        </span> */}
      </div>
      </div>
      <span className='item-price'>${price}</span>
      <button 
          className="not-style-button"
          onClick={() => { removerDelCarrito(id) }}
      >
          {/* <BsFillTrashFill/> */}
      </button>
    </div>
  )
}