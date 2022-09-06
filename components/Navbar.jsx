import Image from "next/image"
import { useSelector } from 'react-redux'
import Link from 'next/link'

export default function Navbar(){
  const cart = useSelector(state => state.cart)

  return(
    <nav className='flex flex-row justify-between w-full content-center items-center font-poppins font-light pt-1 fixed top-0 left-0 shadow-sm bg-gray-100'>
      <div className='flex flex-row'>
        <Link href='/'>
          <div className='ml-4 cursor-pointer hover:scale-105'>
              <Image src='/faviconblack.png' alt="Rauber cerveza artesanal" width={40} height={50} />        
          </div>
        </Link>
      <div className='text-neutral-800 items-center'>
        <div className='flex flex-row items-center content-center'>
          <Link href='/productos'>
            <p className='p-4 cursor-pointer hover:text-neutral-900 hover:scale-105'>Productos</p>
          </Link>

          <Link href='/about'>
            <p className='p-4 cursor-pointer hover:text-neutral-900 hover:scale-105'>Acerca de</p>
          </Link>

          <Link href='/contacto'>
            <p className='p-4 cursor-pointer hover:text-neutral-900 hover:scale-105'>Vendé Räuber</p>
          </Link>
        </div>
      </div>        
      </div>
      
      <button className='m-3 px-4 py-3 bg-slate-900 text-neutral-100 hover:text-neutral-50 hover:bg-slate-800'>Ver carrito ({cart.length} productos)</button>
    </nav>
  )
}