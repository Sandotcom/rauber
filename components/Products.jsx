import React from 'react'
import cervezas from '../constants/cervezas'
import Product from './Product'

const Products = () => {    
  return (
    <div className='flex flex-col text-center gap-8'>
      <div className='flex flex-col gap-4'>
        {cervezas.map((product, i) => (         
            <Product key={i} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products