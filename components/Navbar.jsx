import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { ShoppingCartIcon as ShoppingCartIconSolid, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Transition } from '@headlessui/react'
import Logo from "./Navbar/Logo"
import MenuResponsive from './Navbar/MenuResponsive'
import CartMenu from "./Navbar/CartMenu"
import { SET_CART } from "../app/actions/actionTypes"

export default function Navbar(){
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleCart, setToggleCart] = useState(false)
  
  useEffect(() => {
    const cartLS = JSON.parse(localStorage.getItem('cart'))
    if(cartLS){
      dispatch({ type: SET_CART, payload: cartLS })
    }
  }, [])

  useEffect(() => {
    if(cart.length > 0){
      localStorage.setItem('cart', JSON.stringify(cart))
    } else {
      localStorage.clear()
    }
  }, [cart])

  const handleMenu = () => setToggleMenu((prevMenu) => !prevMenu)

  const handleCart = () => setToggleCart((prevCart) => !prevCart)

  return(
    <nav className='w-full h-20 bg-neutral-900 fixed shadow-md z-30 font-poppins font-medium'>

      <div className='px-2 flex justify-between items-center w-full h-full'>
        <Logo />
        {/* RIGHT SIDE NAVBAR */}
        <div className='flex px-4 text-neutral-100'>
          {/* Cart div & icon */}
          {!toggleMenu && 
            <div className="flex cursor-pointer" onClick={handleCart}>
              <div className="flex flex-row">
                <p className='hidden md:flex mr-1'>Carrito</p>
                <p className='mr-1'>({cart.reduce((acc, item) => acc + item.quantity, 0)})</p>
                {cart.length > 0 ? 
                  <ShoppingCartIconSolid className='w-5 h-5'/>      
                  : 
                  <ShoppingCartIcon className='w-5 h-5'/>  
                }
              </div>
            </div>
          }
          {/* Close & Menu icons */}
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
  
      {/* Menu responsive */}
      <Transition 
        show={toggleMenu}
        enter='transition ease-out duration-150'
        enterFrom='transform opacity-0 scale-75'
        enterTo='transform opacity-100 scale-100'
        leave='transform ease-in duration-100'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-75'
      >
        <div className='absolute w-full bg-neutral-200 font-medium px-8 py-8 shadow-md'>
          <MenuResponsive cart={cart} />     
        </div>
      </Transition>

      {/* Carrito de compras */}

      <Transition 
        show={toggleCart}
        enter='transition ease-out duration-150'
        enterFrom='transform opacity-0 scale-75'
        enterTo='transform opacity-100 scale-100'
        leave='transform ease-in duration-100'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-75'
      >
        <div className='absolute w-full bg-neutral-200 font-semibold px-4 py-4 md:w-1/4 md:right-0 md:max-h-screen shadow-md'>
          <CartMenu />
        </div>
      </Transition>
    </nav>
  )
}