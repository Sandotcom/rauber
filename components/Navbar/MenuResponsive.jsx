import React from 'react'
import Link from 'next/link'

const MenuResponsive = ({ cart }) => {
  return (
    <ul>
      <Link href='/productos'>
          <li className='border-b border-stone-500 w-full'>{'>'} Productos</li>
      </Link>
      <Link href='/about'>
        <li className='border-b border-stone-500 my-4 w-full'>{'>'} Acerca de</li>
      </Link>
      <Link href='/'>
        <li className='border-b border-stone-500 my-4 w-full'>{'>'} Contacto</li>
      </Link>

      {cart.length > 0 && 
        <Link href='/checkout'>
          <li className='border-b border-stone-500 w-full'>{'>'} Ver carrito ({cart.length} productos)</li>
        </Link>
      }
    </ul>
  )
}

export default MenuResponsive