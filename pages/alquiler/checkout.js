import { useSelector } from "react-redux";
import PageLayout from "../../components/PageLayout";
import parseCurrency from "../../constants/parseCurrency";
import Image from "next/image";

export default function Checkout (){
  const { id, name, type, types, portada } = useSelector(state => state.barril)

  return (
    <PageLayout title="Räuber - Alquiler Chopera">
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
        
        <div className='p-4 flex flex-col border rounded-md rounded-b-none border-b-0 bg-white'>
          <h1 className="block font-medium text-gray-700">Detalle</h1>
          <div className='flex py-2'>     
            <Image src={portada} alt={name} className='rounded' width={80} height={80} />
      
            <div className='ml-3 flex flex-1 flex-col'>
              <div className='flex justify-between text-base font-medium text-gray-800'>
                <h3 className={name.length > 12 ? 'text-sm' : undefined}>{name}</h3>
                <p className=' text-slate-500'>{parseCurrency(types.price)}</p>
              </div>
              <p className='text-sm font-light text-gray-600'>{type} x {types.cantidad} litros</p>
            </div>
          </div>
          <div className='flex text-sm py-2 justify-between text-gray-600'>
            <p className="text-sm">Servicio de flete</p>
            <p>{parseCurrency(1800)}</p>
          </div>
          <div className='flex justify-between border-t pt-2 text-lg font-semibold text-gray-900'>
            <p>Total</p>
            <p>{parseCurrency(types.price + 1800)}</p>
          </div>
        </div>

        <div className="bg-white border rounded-md rounded-t-none mb-4 px-4 py-5 sm:p-6">
          {/* <Form /> */}
        </div>
      </div>
    </PageLayout>
  )
}