import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function PageLayout({ children, title = 'Räuber Cerveza' }){
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Rauber cerveza artesanal" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}