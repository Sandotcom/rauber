import Image from "next/image"
import Link from 'next/link'
import style from '../styles/Navbar.module.css'

export default function Navbar(){
  return(
    <nav className={style.container}>
      <div className={style.logo}>
        <Link href='/'>
          <Image src='/favicon.png' alt="Rauber cerveza artesanal" width={50} height={60} />
        </Link>
      </div>
      <div className={style.menu}>

        <Link href='cervezas'>
          <p>
            Nuestras cervezas
            {/* Dropdown menu ?? */}
          </p>
        </Link>

        <Link href='/medallas'>    
          <p>
            Medallas
          </p>
        </Link>

        <Link href='/about'>
          <p>
            Acerca de nosotros
          </p>        
        </Link>

        <Link href='/productos'>        
          <p>
            Latas
          </p>
        </Link>

        <Link href='/contacto'>
          <p>
            Vende Rauber
          </p>
        </Link>
      </div>
    </nav>
  )
}