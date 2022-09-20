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
          <li className='cursor-pointer hover:text-neutral-400'>Nuestras Latas</li>
        </Link>
        <Link href='/alquiler'>
          <li className='cursor-pointer hover:text-neutral-400'>Alquiler de choperas</li>
        </Link>
        <Link href='/'>
          <li className='cursor-pointer hover:text-neutral-400'>Contacto</li>
        </Link>
      </ul>
    </div>
  )
}

export default Logo