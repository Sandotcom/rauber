import React from 'react'
import Image from 'next/image'
import { XCircleIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/solid'

const CartItem = ({ id, name, type, price, image }) => {
  return (
    <div className='flex flex-row justify-between pb-2 my-1 border-b border-stone-500'>
      
      <div className='flex'>
        <Image className='rounded' src={image} alt={name} width={65} height={65} />
        <div className='flex flex-col justify-between px-4'>
          <p className={name.length > 12 ? 'text-sm' : undefined}>{name}</p>
          <div className='flex flex-row text-sm w-16 justify-between'>
            <p className='px-2 rounded-l-md bg-stone-300'>-</p>
            <p>1</p>
            <p className='px-2 rounded-r-md  bg-neutral-800 text-white'>+</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-between'>
        <p className='font-light text-sm leading-6'>{type}</p>
        <p className='self-end text-lg leading-none text-slate-500'>$ {price}</p>
      </div>

    </div>
  )
}

export default CartItem