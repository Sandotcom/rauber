import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cervezas from '../constants/cervezas'
import Link from 'next/link'
import { ADD_ITEM } from '../app/actions/actionTypes'

const Products = () => {  
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
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

  const onClick = (e, product) => {
    e.preventDefault()
    dispatch({ type: ADD_ITEM, payload: product })
  }
  
  return (
    <div>
      <h2>Nuestras cervezas</h2>

      <div>
        {cervezas.map((product) => (         
            <div key={product.id} className='flex font-poppins rounded-md shadow-md bg-gray-200'>
              <div className='flex-none relative'>
                <img src={product.portada} alt={product.name} className='absolute inset-0 w-full h-full object-cover rounded-l-md' />
              </div>
              <div className='flex-auto p-6 border-slate-900'>
                <div className='flex flex-wrap'>
                  <h4 className='flex-auto text-lg font-semibold text-slate-900'>{product.name}</h4>
                  <p className='text-lg font-semibold text-slate-500'>${product.price}</p>
                  <p className='w-full flex-none text-sm font-medium text-slate-700 mt-2'>{product.description}</p>
                </div>
                
                <div className="flex mt-6 text-sm font-medium">
                  <div className="flex-auto flex space-x-4">
                    <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type='button' onClick={(e) => onClick(e, product)}>
                      Agregar
                    </button>
                    <Link key={product.id} href={`cervezas/${product.id}`}>
                    <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                      Detalle
                    </button>
                    </Link>
                  </div>
                  
                </div>
              </div>
            </div>
        ))}
      </div>
      {cart.length > 0 && 
        <Link href={`https://wa.me/542214205694?text=${encodeURIComponent(text)}`}>
          <button>Completar pedido ({cart.length} productos)</button>
        </Link>
      }
      
    </div>
  )
}

export default Products