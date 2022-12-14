import { useSelector } from "react-redux";
import PageLayout from "../components/PageLayout";
import Items from '../components/Checkout/Items'
import Form from "../components/Checkout/Form";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Cart(){
  const cart = useSelector(state => state.cart)

  return (
    <PageLayout title="Räuber - Finalizar pedido">
      <div className="mt-5 px-4">
        <div className="mb-5 md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Finalizar pedido
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Completá esta información para finalizar tu pedido.
            </p>
          </div>
        </div>
        <Disclosure as="div" className='p-4 border rounded-md rounded-b-none border-b-0 bg-white'>
          {({open}) => (
            <>
              <Disclosure.Button className=' w-full flex justify-between'>
                <h1 className="block font-medium text-gray-700">Ver carrito ({cart.reduce((acc, item) => acc + item.quantity, 0)})</h1>
                <ChevronDownIcon className={open ? 'w-6 rotate-180 transform' : 'w-6'} />
              </Disclosure.Button>
              <Disclosure.Panel className='mt-4 font-semibold'>
                <div className="divide-y">
                  {cart.map((item, i) => 
                    <Items key={i} item={item} />
                  )}
                </div>

                <Link href='/productos'>
                  <button
                    type="button"
                    className="w-full py-2 font-medium text-end text-slate-900"
                    >
                      Agregar más productos
                    </button>                
                </Link>
              </Disclosure.Panel>              
            </>
          )}
        </Disclosure>
        <div className="bg-white border rounded-md rounded-t-none mb-4 px-4 py-5 sm:p-6">
          <Form />
        </div>
      </div>
    </PageLayout>
  )
}