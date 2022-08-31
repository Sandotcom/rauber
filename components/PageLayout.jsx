import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function PageLayout({ children, title = 'Räuber Cerveza' }){
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Räuber. Un grupo de amigos que lo da todo por la cerveza artesanal platense." />
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