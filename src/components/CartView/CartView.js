import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartItem } from './CartItem'
import './Cart.scss';

export const CartView = () => {

  const {carrito, vaciarCarrito} = useContext(CartContext)

  return (
    <div className="cont-cart">
      {
      carrito.length > 0 
      ? <>
          <h2>Cart View</h2>
          <section className='cart'>
          <div className='cart-items'>
              {
                  carrito.map((prod) => <CartItem {...prod} key={prod.id}/>)
              }
              <button className="cart-btn" onClick={vaciarCarrito}>Vaciar carrito</button>
              <button className="cart-btn">Terminar mi compra</button>
          </div>
          <div className='cart-buy'>
            <div className="cart-sub">
              <span>Subtotal:</span>
              <span>$
                {
                  Math.round((carrito.reduce((sub,prod) => sub + (prod.price*prod.cantidad),0)) * 100) / 100
                }
              </span>
            </div>
            <div className="cart-shipp">
            <span>Shipping:</span>
            <span>Envio gratis</span>
            </div>
            <div className="cart-tax">
              <span>Impuesto:</span>
              <span>21%(IVA)</span>
            </div>
            <div className="cart-total">
              <span>Total:</span>
              <span>$
                {
                  (Math.round((carrito.reduce((sub,prod) => sub + (prod.price*prod.cantidad),0)) * (100+21)) / 100)
                }
              </span>
            </div>
          </div>
          </section>
        </>

      : <>
          <h2>No agregaste items al carrito aún</h2>
          <Link to="/" className="btn btn-primary">Volver</Link>
        </>
      }
    </div>
  )
}