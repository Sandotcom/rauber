import Link from 'next/link'
import PageLayout from '../components/PageLayout'
import Image from 'next/future/image'
import logo from '../public/logo.png'
import bgImage from '../public/hopVaso.jpg'
import bgmdImage from '../public/hops.jpg'

export default function Home() {

  return (
    <PageLayout title='Räuber Cerveza Artesanal'>
      <div className='flex flex-col space-y-2 md:max-w-screen-xl'>
        <div className='flex flex-col' >
          <div className='absolute overflow-hidden z-0'>
            <Image src={bgImage} alt='Räuber Cerveza Artesanal' className='h-[550px] object-cover md:hidden' priority />
            <Image src={bgmdImage} alt='Räuber Cerveza Artesanal' className='hidden object-cover md:block h-[550px] md:h-[700px] md:max-w-screen-xl' priority />
          </div>
          <div className='flex flex-col md:justify-between md:text-center h-[550px] md:h-[700px] bg-gradient-to-t from-black z-[2]'>
            <div className='mb-40 mt-32 self-center w-72'>
              <Image src={logo} alt='Räuber Cerveza Artesanal' />
            </div>
            <div className='flex flex-col p-6 space-y-2 md:pb-16 text-white'>
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
