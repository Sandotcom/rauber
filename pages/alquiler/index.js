import BarrilProduct from "../../components/BarrilProduct";
import PageLayout from "../../components/PageLayout";
import barriles from "../../constants/barriles";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Alquiler({ data }){
  return (
    <PageLayout title="Räuber - Alquiler de chopera" >
      <div className="flex flex-col p-4 space-y-2 md:max-w-screen-xl">
        <h2 className='font-semibold text-xl py-2'>Nuestros barriles</h2>
        <Disclosure as="div" className='p-4 border rounded-md'>
          {({open}) => (
            <>
              <Disclosure.Button className=' w-full flex justify-between'>
                <p className="block text-base font-medium text-gray-700">Información relevante</p>
                <ChevronDownIcon className={open ? 'w-6 rotate-180 transform' : 'w-6'} />
              </Disclosure.Button>
              <Disclosure.Panel className='mt-4'>
                <div className="divide-y text-sm font-light">
                  <div className="p-2">
                    <p>El alquiler incluye hielo y chopera.</p>
                    <p className=" font-medium">Todo listo para servir y disfrutar!</p>
                  </div>
                  <p className="p-2">Servicio de flete (ida y vuelta): $ 1.800</p>
                  <div>
                    <p className="p-2">Para más información: {<Link href={`https://wa.me/542214775678`} passHref={true}>
                      <a target='_blank' rel="noopener noreferrer"><u>Comunicate por WhatsApp</u></a>
                    </Link>}</p>                    
                  </div>
                </div>
              </Disclosure.Panel>              
            </>
          )}
        </Disclosure>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col md:grid md:grid-cols-2 gap-4'>
            {data.map((product, i) => (
              <BarrilProduct key={i} product={product} />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export async function getStaticProps(){
  const data = barriles

  return {
    props: { data }
  }
}