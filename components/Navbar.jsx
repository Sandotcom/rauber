import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { ShoppingCartIcon as ShoppingCartIconSolid, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Dialog, Transition } from '@headlessui/react'
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
    <nav className='w-full h-20 bg-neutral-900 fixed shadow-md z-10 font-poppins font-medium'>

      <div className='px-2 flex justify-between items-center w-full h-full'>
        <Logo />
        {/* RIGHT SIDE NAVBAR */}
        <div className='flex px-4 text-neutral-100'>          
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

          <button className='md:hidden ml-4' onClick={handleMenu}>
            <Bars3Icon className='w-6 h-6'/>
          </button>
        </div>
      </div>

      <Transition.Root show={toggleMenu} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={setToggleMenu}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <MenuResponsive setToggleMenu={setToggleMenu} />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog >
      </Transition.Root>

      <Transition.Root show={toggleCart} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={setToggleCart}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <CartMenu setToggleCart={setToggleCart} />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog >
      </Transition.Root>

    </nav>
  )
}