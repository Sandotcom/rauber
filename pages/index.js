import Link from 'next/link'
import PageLayout from '../components/PageLayout'
import Image from 'next/future/image'
import logo from '../public/logo.png'
import bgImage from '../public/hopVaso.jpg'
import bgmdImage from '../public/hops.jpg'
import bgLatas from '../public/banner1.jpg'
import bgBarrels from '../public/chopper.jpeg'

export default function Home() {
  return (
    <PageLayout title='Räuber Cerveza Artesanal'>
      <div className='flex flex-col space-y-8 md:max-w-screen-xl'>
        <div className='flex flex-col' >
          <div className='absolute overflow-hidden z-0'>
            <Image src={bgImage} alt='Räuber Cerveza Artesanal' className='h-[550px] object-cover md:hidden' priority />
            <Image src={bgmdImage} alt='Räuber Cerveza Artesanal' className='hidden object-cover md:block h-[550px] md:h-[700px] md:max-w-screen-xl' />
          </div>
          <div className='flex flex-col md:justify-between md:text-center h-[550px] md:h-[700px] bg-gradient-to-t from-black z-[2]'>
            <div className='mb-40 mt-32 self-center w-72'>
              <Image src={logo} alt='Räuber Cerveza Artesanal' />
            </div>
            <div className='flex flex-col p-6 space-y-2 md:pb-16 text-white'>
              <h2 className='font-semibold text-xl'>¿Quiénes somos?</h2>
              <p className='font-zilla'>Un equipo de amigos que lo da todo por la cerveza artesanal platense</p>

              <div className='pt-2'>
                <Link href='#'>
                  <button className='h-10 px-6 font-semibold rounded-md bg-black text-white'>Más información</button>
                </Link>  
              </div>
            </div>
          </div>
        </div>

        <h2 className='px-4 font-semibold text-2xl text-center text-slate-900'> Nuestros productos</h2>
        <div className='flex flex-col md:flex-row md:gap-10 md:space-y-0 justify-between items-center p-4 space-y-10'>
          <Link href='/productos'>
            <div className='flex-1 shadow-md rounded-md overflow-hidden relative cursor-pointer'>
              <Image src={bgLatas} alt='Tienda Online' className='w-full' />
              <div className='flex flex-col p-8 text-white bg-gradient-to-bl from-black absolute w-full h-full left-0 top-0 items-center justify-between '>
                <h2 className='font-medium text-2xl '>Latas</h2>
                <button className='h-10 px-6 font-semibold rounded-md bg-black  border border-black'>Ver más</button>
              </div>
            </div>
          </Link>
          <Link href='/alquiler'>
            <div className='flex-1 shadow-md rounded-md  overflow-hidden relative cursor-pointer'>
              <Image src={bgBarrels} alt='Tienda Online' className='w-full' />
              <div className='flex flex-col py-14 text-white bg-gradient-to-bl from-black absolute w-full h-full left-0 top-0 items-center justify-between '>
                <h2 className='font-medium text-2xl '>Alquiler de choperas</h2>
                <button className='h-10 px-6 font-semibold rounded-md bg-black  border border-black'>Ver más</button>
              </div>
            </div>
          </Link>
        </div>
        
        <div className=' w-11/12 h-[1px] self-center rounded-lg bg-slate-300'></div>

        <div className='flex flex-col p-4 py-6 md:grid md:grid-cols-2'>
          <h2 className='font-semibold text-2xl text-center'>Reconocimientos</h2>
          <div className='flex flex-col font-roboto '>
            <div className='py-4 space-y-2 '>
              <h2 className='font-medium text-zinc-800 text-lg'>Golden Ale</h2>
              <p className='text-zinc-600'>
                Oro, Copa 3 Ciudades 2022.<br/>
                Plata, Copa Platense de Cervezas 2021.<br/>
              </p>
            </div>
            
            <div className=' w-3/4 h-[1px] self-center rounded-lg bg-orange-200'></div>
            
            <div className='py-4 space-y-2'>
              <h2 className='font-medium text-zinc-800 text-lg '>Session IPA</h2>
              <p className='text-zinc-600'>
                Oro, Copa 3 ciudades 2020.<br/>
                Oro, Copa Platense de Cervezas 2021.<br/>
              </p>
            </div>

            <div className=' w-3/4 h-[1px] self-center rounded-lg bg-orange-200'></div>

            <div className='py-4 space-y-2'>
              <h2 className='font-medium text-zinc-800 text-lg '>American IPA</h2>
              <p className='text-zinc-600'>
                Oro, Copa 3 Ciudades 2021.<br/>
                Bronce, Copa Cervezas de América 2022.<br/>
                Bronce, Copa 3 Ciudades 2022.<br/>
              </p>
            </div>
            
            <div className=' w-3/4 h-[1px] self-center rounded-lg bg-orange-200'></div>

            <div className='py-4 space-y-2'>
              <h2 className='font-medium text-zinc-800 text-lg '>Catharina Sour</h2>
              <p className='text-zinc-600'>
                Oro, Copa Argentina de Cervezas 2021<br/>
                Plata, Copa Platense de Cervezas 2021<br/>
              </p>
            </div>

            <div className=' w-3/4 h-[1px] self-center rounded-lg bg-orange-200'></div>

            <div className='py-4 space-y-2'>
              <h2 className='font-medium text-zinc-800 text-lg '>English Ipa</h2>
              <p className='text-zinc-600'>
                Bronce, Copa Platense de Cervezas 2021<br/>
              </p>
            </div>

            <div className=' w-3/4 h-[1px] self-center rounded-lg bg-orange-200'></div>

            <div className='py-4 space-y-2'>
              <h2 className='font-medium text-zinc-800 text-lg '>Red Ale</h2>
              <p className='text-zinc-600'>
                Mención Especial, Copa 3 Ciudades 2021<br/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
