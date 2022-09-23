import React from 'react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import Image from 'next/image'
import igLogo from '../../public/instagramBlack.svg'
import gmailLogo from '../../public/gmailBlack.svg'
import wspLogo from '../../public/whatsappBlack.svg'

const MenuResponsive = ({ setToggleMenu }) => {
  const router = useRouter()

  return (
    <div className='flex h-full flex-col overflow-y-scroll bg-neutral-100 shadow-xl font-poppins'>
      <div className='flex-1 overflow-y-auto py-6 px-4 sm:px-6'>
        <div className='flex items-start justify-between'>
          <Dialog.Title className='text-lg font-medium text-gray-900'>Menú</Dialog.Title>
          <div className='ml-3 flex h-7 items-center'>
            <button type='button' className='-m-2 p-2 text-gray-700 hover:text-gray-500' onClick={() => setToggleMenu(false)}>
              <span className='sr-only'>Cerrar</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
        </div>

        <div className='flex flex-col justify-between mt-8 h-5/6'>
          <div className=''>
            <ul className='text-center divide-y text-lg'>
                <li className='py-4' onClick={() => {router.pathname === '/productos' ? setToggleMenu(false) : router.push('/productos')}}>Nuestras latas</li>
                <li className='py-4' onClick={() => {router.pathname === '/alquiler' ? setToggleMenu(false) : router.push('/alquiler')}}>Alquiler de choperas</li>
                {/* <li className='py-4' onClick={() => {router.pathname === '/about' ? setToggleMenu(false) : router.push('/about')}}>Acerca de nosotros</li>
                <li className='py-4' onClick={() => {router.pathname === '/contacto' ? setToggleMenu(false) : router.push('/contacto')}}>Contacto</li> */}
            </ul>
          </div>
          <div className='flex self-center gap-10'>
            <a href="https://www.instagram.com/rauber.cerveza/" target='_blank'>
              <Image src={igLogo} />       
            </a>
            <a href='https://mail.google.com/mail/u/0/?fs=1&to=rauber.contacto@gmail.com&tf=cm' target='_blank'>
              <Image src={gmailLogo} />
            </a>
            <a href="https://wa.me/542214775678" target='_blank'>
              <Image src={wspLogo} />
            </a>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default MenuResponsive