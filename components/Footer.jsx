import Image from "next/future/image"
import logoRauber from '../public/logo.png'
import igLogo from '../public/instagram.svg'
import gmailLogo from '../public/gmail.svg'
import wspLogo from '../public/whatsapp.svg'
import linkInLogo from '../public/linkedin.svg'

export default function Footer(){
  return (
    <footer className="w-full h-28 bg-zinc-900">
      <div className="flex flex-col h-full px-2 items-center font-poppins text-xs text-white">
        <div className="flex w-full justify-between px-4 py-4">
          <a href="https://www.instagram.com/rauber.cerveza/" target='_blank'>
            <Image src={logoRauber} className='h-8 w-fit' />
          </a>
          <div className="flex items-center space-x-2">
            <a href="https://www.instagram.com/rauber.cerveza/" target='_blank'>
              <Image src={igLogo} className='h-6 w-fit shadow-lg' />
            </a>
            <a href='https://mail.google.com/mail/u/0/?fs=1&to=rauber.contacto@gmail.com&tf=cm' target='_blank'>
              <Image src={gmailLogo} className='h-6 w-fit shadow-lg' />
            </a>
            <a href="https://wa.me/542214775678" target='_blank'>
              <Image src={wspLogo} className='h-6 w-fit shadow-lg' />
            </a>
          </div>
        </div>
        <div className="flex w-full justify-between px-4 my-3">
          <a href="https://www.linkedin.com/in/santiagotrabucco/" target='_blank'>
            <p>Desarrollo web Santiago Trabucco</p>
          </a>
          <div className="flex space-x-2">
            <a href="https://www.linkedin.com/in/santiagotrabucco/" target='_blank'>
              <Image src={linkInLogo} className='shadow-lg h-5 w-fit' />
            </a>
            <a href='https://mail.google.com/mail/u/0/?fs=1&to=santiagotrabucco@gmail.com&tf=cm' target='_blank'>
              <Image src={gmailLogo} className='h-5 w-fit shadow-lg' />
            </a>

          </div>
        </div>
      </div>
    </footer>
  )
}