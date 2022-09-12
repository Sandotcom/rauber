import React, { useMemo } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const CartMenu = () => {
  const cart = useSelector(state => state.cart)
  const text = useMemo(
    () =>
      cart
        .reduce(
          (message, product) => message.concat(`* ${product.name} - $${product.price}\n`),
          ``
        )
        .concat(`\nTotal: $${cart.reduce((total, product) => total + product.price, 0)}`),
    [cart]
  )

  if(cart.length === 0){
    return (
      <div className='flex flex-col text-center gap-8'>
        <p className='font-normal'>Tu carrito está vacío</p>

        <Link href='/productos'>
          <button className='h-10 px-5 font-semibold rounded-md bg-green-700 text-white'>Conocé nuestros productos</button>
        </Link>
      </div>
    )
  } else {
    return (
      <div className='flex flex-col justify-between'>
        {cart.map((item, i) => (
          <CartItem key={i} item={item} />
          )
        )}

        <div className='flex flex-col justify-between mt-6 space-y-1'>
          <div className='flex flex-row justify-between text-lg font-semibold'>
            <p>Total</p>
            <p>$ {cart.reduce((total, product) => total + product.price * product.quantity, 0)}</p>
          </div>

          <div className='flex flex-row justify-end pt-2'>
            <Link href={`https://wa.me/542214205694?text=${encodeURIComponent(text)}`}>
              <button className='h-10 w-full text-base font-semibold rounded-md bg-green-700 text-white'>Finalizar pedido</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default CartMenu