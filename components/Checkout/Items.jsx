import React from 'react'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import { addItem, removeItem } from '../../app/actions'
import parseCurrency from '../../constants/parseCurrency'

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
    <div className='flex py-2'>
      
      <Image src={portada} alt={name} className='rounded' width={80} height={80} />
      
      <div className='ml-3 flex flex-1 flex-col'>
        <div className='flex justify-between text-base font-medium text-gray-800'>
          <h3 className={name.length > 12 ? 'text-sm' : undefined}>{name}</h3>
          <p className=' text-slate-500'>{parseCurrency(price * quantity)}</p>
        </div>
        <p className='text-sm font-light text-gray-600'>{type}</p>
        <div className='flex flex-1 items-end text-sm mb-1'>
          <button className='px-2 rounded-l-md bg-stone-300' onClick={handleRemove}>-</button>
          <p className='px-2'>{quantity}</p>
          <button className='px-2 rounded-r-md  bg-neutral-800 text-white' onClick={handleAdd}>+</button>
        </div>
      </div>

    </div>
  )
}

export default Items