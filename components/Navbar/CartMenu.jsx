import Link from 'next/link'
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

      <div className='flex flex-col justify-between mt-6 space-y-1'>
        <div className='flex flex-row justify-between font-bold'>
          <p>Total</p>
          <p>$ 1800</p>
        </div>

        <div className='flex flex-row justify-between pt-2 space-x-1 text-sm'>
          <Link href='/checkout'>
            <button className='h-10 px-5 font-semibold rounded-md border border-slate-800 text-slate-900'>Modificar carrito</button>
          </Link>
            
          <Link href='/checkout'>
            <button className='h-10 px-5 font-semibold rounded-md bg-green-700 text-white'>Finalizar pedido</button>
          </Link>
        </div>
      </div>
      </div>
    )
  }
}

export default CartMenu