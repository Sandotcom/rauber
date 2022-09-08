import React from 'react'
import Image from 'next/image'

const CartItem = ({ id, name, type, price, image }) => {
  return (
    <div className='flex flex-row justify-between pb-2 my-1 border-b border-stone-500'>
      
      <div className='flex'>
        <Image className=' rounded' src={image} alt={name} width={65} height={65} />
        <div className='flex flex-col justify-center px-4'>
          <p className={name.length > 12 ? 'text-sm' : undefined}>{name} (2)</p>
          <p className='font-light text-sm'>{type}</p>
        </div>
      </div>

      <p className='self-center text-lg font-semibold text-slate-500'>$ 780</p>

    </div>
  )
}

export default CartItem