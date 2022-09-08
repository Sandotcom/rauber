import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const CartMenu = () => {
  const cart = useSelector(state => state.cart)

  if(cart.length === 0){
    return (
      <div className='flex flex-col'>
        <p className='font-light'>Tu carrito está vacío</p>
      </div>
    )
  } else {
    return (
      <div className='flex flex-col justify-between'>       
        {cart.map((item, i) => (
          <CartItem key={i} id={item.id} name={item.name} type={item.type} price={item.price} image={item.portada} />
        ))}

        <div className='flex flex-row justify-between py-2 space-x-1 font-poppins text-sm font-semibold'>
          <button className='h-10 px-6 font-semibold rounded-md border border-slate-800 text-slate-900'>Modificar carrito</button>
          <button className='h-10 px-6 font-semibold rounded-md bg-green-700 text-white'>Finalizar pedido</button>
        </div>
      </div>
    )
  }
}

export default CartMenu