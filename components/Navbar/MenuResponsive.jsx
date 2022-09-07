import React from 'react'
import Link from 'next/link'

const MenuResponsive = ({ cart }) => {
  return (
    <div>
      <Link href='/productos'>
          <li className='border-b border-stone-300 w-full'>Productos</li>
        </Link>
        <Link href='/about'>
          <li className='border-b border-stone-300 my-4 w-full'>Acerca de</li>
        </Link>
        <Link href='/'>
          <li className='border-b border-stone-300 my-4 w-full'>Vendé Räuber</li>
        </Link>

        {cart.length > 0 && 
          <Link href='/checkout'>
            <li className='border-b border-stone-300 mt-4 w-full'>Ver carrito ({cart.length} productos)</li>
          </Link>
        }
    </div>
  )
}

export default MenuResponsive