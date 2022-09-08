import React from 'react'
import Image from 'next/image'

const CartItem = ({ id, name, type, price, image }) => {
  return (
    <div className='flex flex-row justify-between pb-2 my-1 border-b border-stone-300'>
      <div className='flex'>
        <Image className=' rounded' src={image} alt={name} width={80} height={80} />
        <div className='flex flex-col justify-center px-4'>
          <p className={name.length > 12 ? 'text-sm' : undefined}>{name}</p>
          <p className='font-light text-sm'>{type}</p>
        </div>
      </div>
      <div className='flex flex-col justify-between font-medium'>
        <p className='self-end'>Cant: 1</p>
        <p className='self-end text-green-700'>$380</p>
      </div>
    </div>
  )
}

export default CartItem