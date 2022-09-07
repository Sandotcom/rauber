import Image from "next/image"
import Link from 'next/link'
import { useState } from "react"
import { useSelector } from "react-redux"

export default function Navbar(){
  const cart = useSelector(state => state.cart)
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggleMenu = () => setToggleMenu((prevToggleMenu) => !prevToggleMenu)

  return(
    <nav className='w-full h-20 bg-gray-100 fixed shadow-md z-30 font-poppins font-normal'>

      <div className='px-2 flex justify-between items-center w-full h-full'>
        
        <div className='flex items-center text-neutral-900'>
          <Link href='/'>
            <Image src='/faviconblack.png' alt="Rauber cerveza artesanal" width={50} height={60} />
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

        <div className='flex px-4'>

          <div className="flex cursor-pointer">
            <p className='hidden md:flex mr-1'>Carrito</p>
            <p className='font-medium mr-1'>({cart.length})</p>
            <div>
              {cart.length > 0 ? 
                <Image src='/cartIconSolid.svg' width={20} height={20} />        
              : 
                <Image src='/cartIconOut.svg' width={20} height={20} />    
              }
            </div>
          </div>
          
          <button className='md:hidden ml-4' onClick={handleToggleMenu}>
            {toggleMenu ? 
              <Image src='/xmark.svg' width={20} height={20} />
              :
              <Image src="/menu.svg" width={20} height={20} />
            }            
          </button>

        </div>
      </div>

      <ul className={toggleMenu ? 'absolute w-full -mt-1 bg-gray-100 font-medium px-8 py-8 shadow-md' : 'hidden'}>
        <Link href='/productos'>
          <li className='border-b border-gray-200 my-4 w-full'>Productos</li>
        </Link>
        <Link href='/about'>
          <li className='border-b border-gray-200 my-4 w-full'>Acerca de</li>
        </Link>
        <Link href='/'>
          <li className='border-b border-gray-200 my-4 w-full'>Vendé Räuber</li>
        </Link>
      </ul>
    </nav>
  )
}