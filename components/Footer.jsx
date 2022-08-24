import styles from '../styles/Footer.module.css'

export default function Footer(){
  return (
    <footer className={styles.footer}>
      
        <p>Rauber Cerveza Artesanal</p>

        <div>
          <p>Instagram</p>
          <p>WhatsApp</p>
          <p>Mail</p>
        </div>
        <p>Contacto</p>
    </footer>
  )
}