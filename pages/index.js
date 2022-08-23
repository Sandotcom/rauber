import PageLayout from '../components/PageLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <PageLayout title='Rauber Cerveza Artesanal'>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1>Somos Rauber</h1>
          <h3>Un equipo de amigos que lo da todo por la cerveza artesanal platense</h3>

          {/* Carrousel de imagenes */}

          {/* Quienes somos?
          Nuestra historia...
          A donde vamos? */}

        </div>
      </div>
    </PageLayout>
  )
}
