import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import CartItem from './CartItem'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const CartMenu = ({ setToggleCart }) => {
  const cart = useSelector(state => state.cart)

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
      <div className='flex h-full flex-col overflow-y-scroll bg-neutral-100 shadow-xl font-poppins'>
        <div className='flex-1 overflow-y-auto py-6 px-4 sm:px-6'>
          <div className='flex items-start justify-between'>
            <Dialog.Title className='text-lg font-medium text-gray-900'>Tu carrito</Dialog.Title>
            <div className='ml-3 flex h-7 items-center'>
              <button type='button' className='-m-2 p-2 text-gray-700 hover:text-gray-500' onClick={() => setToggleCart(false)}>
                <span className='sr-only'>Cerrar</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
          </div>

          <div className='mt-8'>
            <div className='flow-root'>
              <div className='-my-6 divide-y font-semibold divide-gray-300'>
                {cart.map((item, i) => (
                  <CartItem key={i} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-200 py-6 px-4 sm:px6'>
          <div className='flex justify-between text-lg font-semibold text-gray-900'>
            <p>Total</p>
            <p>$ {cart.reduce((total, product) => total + product.price * product.quantity, 0)}</p>
          </div>
          <div className='mt-4'>
            <Link href='/checkout'>
              <button className='py-3 px-6 w-full font-medium rounded-md bg-black text-white'>Finalizar pedido</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default CartMenu