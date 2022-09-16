import Link from 'next/link'
import PageLayout from '../components/PageLayout'

export default function Home() {
  return (
    <PageLayout title='Räuber Cerveza Artesanal'>
      <div className='flex flex-col p-4 space-y-2 md:max-w-screen-xl'>
        <div className='flex flex-col md:grid md:grid-cols-2'>
          <div className='md:px-20'>
            <img className='w-auto h-auto rounded-xl' src='/rauber1.jpg' />
          </div>
          <div className='flex flex-col space-y-2 pt-4'>
            <h2 className='font-semibold text-xl'>¿Quiénes somos?</h2>
            <p className='font-zilla'>Un equipo de amigos que lo da todo por la cerveza artesanal platense</p>

            <div className='pt-2'>
              <Link href='/about'>
                <button className='h-10 px-6 font-semibold rounded-md bg-black text-white'>Más información</button>
              </Link>  
            </div>
          </div>
        </div>

        <div className='flex flex-col space-y-2 pt-4'>
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
