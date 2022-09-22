import React from 'react'
import { ADD_ITEM } from '../app/actions/actionTypes'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import parseCurrency from '../constants/parseCurrency'

const Product = ({ product }) => {
  const { id, name, type, description, price, portada } = product
  const dispatch = useDispatch()

  const onClick = (e, product) => {
    e.preventDefault()
    dispatch({ type: ADD_ITEM, payload: product })
  }

  return (
    <Link href={`cervezas/${id}`}>
      <div className='flex font-poppins rounded-md shadow bg-gray-200'>
        <div className='relative'>
          <img src={portada} alt={name} className='w-full h-full md:w-48 md:h-48 object-cover rounded-l-md' />
        </div>
        <div className='flex flex-col md:w-8/12 justify-between p-3 border-slate-900'>
          <div className='flex justify-between'>
            <div>
              <h4 className={name.length > 12 ? 'flex-auto text-base font-semibold text-slate-900' : 'flex-auto text-lg font-semibold text-slate-900'}>{name}</h4>
              <p className='flex-none text-sm font-medium text-slate-700 mt-2'>{type}</p>
              <p className='hidden text-sm mt-4 text-slate-700 md:block'>{description}</p>
            </div>
            <p className='text-lg font-semibold text-slate-500'>{parseCurrency(price)}</p>
          </div>
                  
          <div className="flex mt-8 md:mt-0 text-sm">
            <div className="flex w-full space-x-4 justify-between">
              <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type='button' onClick={(e) => onClick(e, product)}>
                Agregar
              </button>
              <Link key={id} href={`cervezas/${id}`}>
                <button className="h-10 px-6 font-semibold rounded-md border border-slate-800 text-slate-900" type="button">
                  Detalle
                </button>
              </Link>
            </div>                  
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Product