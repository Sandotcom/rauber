import Link from 'next/link'
import PageLayout from '../components/PageLayout'

export default function Home() {
  const backgroundImageStyle = {
    backgroundImage: `url('hopVaso.jpg')`,
    backgroundSize: "cover"
  }

  return (
    <PageLayout title='Räuber Cerveza Artesanal'>
      <div className='flex flex-col space-y-2 md:max-w-screen-xl'>
        <div className='flex flex-col ' style={backgroundImageStyle}>
          <div className='flex flex-col bg-gradient-to-t from-black'>
            <div className='mb-40 mt-32 self-center w-72'>
              <img src='/logo.png' />
            </div>
            <div className='flex flex-col p-6 space-y-2 text-white'>
              <h2 className='font-semibold text-xl'>¿Quiénes somos?</h2>
              <p className='font-zilla'>Un equipo de amigos que lo da todo por la cerveza artesanal platense</p>

              <div className='pt-2'>
                <Link href='/about'>
                  <button className='h-10 px-6 font-semibold rounded-md bg-black text-white'>Más información</button>
                </Link>  
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col p-4 space-y-2 pt-4'>
          <h2 className='font-semibold text-xl'>Logros</h2>
          <p className='font-montserrat'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel vehicula nisi. Quisque congue ut nunc vel fermentum. Donec malesuada pharetra suscipit. 
            Nulla enim tortor, accumsan a tincidunt congue, viverra in ante. Suspendisse non eleifend mi. Aenean eu dui pharetra dui vestibulum vulputate.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
