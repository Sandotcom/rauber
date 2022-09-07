import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const CartMenu = () => {
  const cart = useSelector(state => state.cart)
  console.log(cart)

  if(cart.length === 0){
    return (
      <div className='flex flex-col'>
        <p className='font-light'>Tu carrito está vacío</p>
      </div>
    )
  } else {
    return (
      <div className='flex flex-col'>       
        {cart.map((item) => (
          <CartItem id={item.id} name={item.name} type={item.type} price={item.price} image={item.portada} />
        ))}
      </div>
    )
  }
}

export default CartMenu