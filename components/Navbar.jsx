import Image from "next/image"
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar(){
  return(
    <div className={styles.containerGeneral}><div className={styles.titleRauber}>
      <Image href='/' src='/favicon.png' alt="Rauber cerveza artesanal" width={190} height={200} />
</div>
  <nav className={styles.container}>
      <div className={styles.menu}>
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
    </nav></div>
  )
}