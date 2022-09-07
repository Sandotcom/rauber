import { useState } from "react"
import { useSelector } from "react-redux"
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { ShoppingCartIcon as ShoppingCartIconSolid, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Transition } from '@headlessui/react'
import Logo from "./Navbar/Logo"
import MenuResponsive from './Navbar/MenuResponsive'
import CartMenu from "./Navbar/CartMenu"

export default function Navbar(){
  const cart = useSelector(state => state.cart)
  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleCart, setToggleCart] = useState(false)

  const handleMenu = () => setToggleMenu((prevMenu) => !prevMenu)

  const handleCart = () => setToggleCart((prevCart) => !prevCart)

  return(
    <nav className='w-full h-20 bg-neutral-800 fixed shadow-md z-30 font-poppins font-normal'>

      <div className='px-2 flex justify-between items-center w-full h-full'>        
        
        <Logo />

        <div className='flex px-4 text-neutral-100'>
          {!toggleMenu && 
            <div className="flex cursor-pointer" onClick={handleCart}>
              <div className="flex flex-row">
                <p className='hidden md:flex mr-1'>Carrito</p>
                <p className='mr-1'>({cart.length})</p>
                {cart.length > 0 ? 
                <ShoppingCartIconSolid className='w-5 h-5'/>      
                : 
                <ShoppingCartIcon className='w-5 h-5'/>  
                }
              </div>
            </div>
          }
          
          {toggleCart ? 
            <button className='md:hidden ml-4' onClick={handleCart}>
              {toggleCart ? 
                <XMarkIcon className='w-6 h-6'/>
                :
                <Bars3Icon className='w-6 h-6'/>
              }            
            </button>
            :
            <button className='md:hidden ml-4' onClick={handleMenu}>
            {toggleMenu ? 
              <XMarkIcon className='w-6 h-6'/>
              :
              <Bars3Icon className='w-6 h-6'/>
            }            
          </button>
          }
        </div>
      </div>
      
      <Transition 
        show={toggleMenu}
        enter='transition ease-out duration-150'
        enterFrom='transform opacity-0 scale-75'
        enterTo='transform opacity-100 scale-100'
        leave='transform ease-in duration-100'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-75'
      >
        <ul className='absolute w-full bg-stone-200 font-medium px-8 py-8 shadow-md'>
          <MenuResponsive cart={cart} />     
        </ul>
      </Transition>
      
      <Transition 
        show={toggleCart}
        enter='transition ease-out duration-150'
        enterFrom='transform opacity-0 scale-75'
        enterTo='transform opacity-100 scale-100'
        leave='transform ease-in duration-100'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-75'
      >
        <div className='absolute w-full bg-stone-200 font-medium px-8 py-8 md:w-1/4 md:right-0 md:max-h-screen shadow-md'>
            <CartMenu />
        </div>
      </Transition>

    </nav>
  )
}