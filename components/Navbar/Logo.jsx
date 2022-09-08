import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='flex items-center text-neutral-100'>
      <Link href='/'>
        <div>
          <Image src='/favicon.png' alt="Rauber cerveza artesanal" width={50} height={60} />
        </div>
      </Link>

      <ul className="hidden md:flex ml-4 space-x-5">
        <Link href='/productos'>
          <li className='cursor-pointer hover:text-neutral-400'>Productos</li>
        </Link>
        <Link href='/about'>
          <li className='cursor-pointer hover:text-neutral-400'>Acerca de</li>
        </Link>
        <Link href='/'>
          <li className='cursor-pointer hover:text-neutral-400'>Vendé Räuber</li>
        </Link>
      </ul>
    </div>
  )
}

export default Logo