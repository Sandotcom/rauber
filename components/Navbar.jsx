import Image from "next/image"
import { useSelector } from 'react-redux'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar(){
  const cart = useSelector(state => state.cart)

  return(
    <div className={styles.containerGeneral}>
        <Link href='/'>
          <div className={styles.titleRauber}>
              <Image src='/favicon.png' alt="Rauber cerveza artesanal" width={190} height={200} />        
          </div>
        </Link>
      <nav className={styles.container}>
        <div className={styles.menu}>
          <Link href='cervezas'>
            <p>
              Nuestras cervezas
              {/* Dropdown menu ?? */}
            </p>
          </Link>

          <Link href='/about'>
            <p>Acerca de nosotros</p>
          </Link>

          <Link href='/productos'>
            <p>Latas</p>
          </Link>

          <Link href='/contacto'>
            <p>Vende Rauber</p>
          </Link>

          <div className={styles.cart}>
            <p>Ver carrito ({cart.length} productos)</p>
          </div>
        </div>
      </nav>
    </div>
  )
}