import React from 'react'
import { useDispatch } from 'react-redux'
import Image from 'next/image'


const Items = ({ item }) => {
  const { id, name, type, price, portada, quantity } = item
  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removeItem(id))
  }

  const handleAdd = () => {
    dispatch(addItem(item))
  }

  return (
    <div className='flex flex-row justify-between pb-2 my-1 border-b border-stone-500'>
      
      <div className='flex'>
        <Image className='rounded' src={portada} alt={name} width={65} height={65} />
        <div className='flex flex-col justify-between px-4'>
          <p className={name.length > 12 ? 'text-sm' : undefined}>{name}</p>
          <div className='flex flex-row text-sm w-16 justify-between'>
            <button className='px-2 rounded-l-md bg-stone-300' onClick={handleRemove}>-</button>
            <p className='px-2'>{quantity}</p>
            <button className='px-2 rounded-r-md  bg-neutral-800 text-white' onClick={handleAdd}>+</button>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-between'>
        <p className='font-light text-sm leading-6'>{type}</p>
        <p className='self-end text-lg leading-none text-slate-500'>$ {price * quantity}</p>
      </div>

    </div>
  )
}

export default Items