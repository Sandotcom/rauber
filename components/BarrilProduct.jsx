import React, { useMemo } from 'react'
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import Link from 'next/link'
import parseCurrency from '../constants/parseCurrency'

const BarrilProduct = ({ product }) => {
  const { id, name, type, types, description, portada } = product
  const [selected, setSelected] = useState(types[0])

  const text = useMemo(() =>
  `Hola! Este es mi pedido:\n`
    .concat(`* Barril ${name} x ${selected.cantidad} litros - ${parseCurrency(selected.price)}\n`)
    .concat(
      `\nTotal: ${parseCurrency(selected.price)}`
    ), [selected])
  
  return (
    <div className='flex font-poppins rounded-md shadow bg-gray-200'>
      <div className='relative'>
        <img src={portada} alt={name} className='w-full h-full md:w-60 object-cover rounded-l-md' />
      </div>
      <div className='flex flex-col md:w-7/12 justify-between p-3 border-slate-900'>
        <div className='flex justify-between'>
          <div>
            <h4 className={name.length > 12 ? 'flex-auto text-base font-semibold text-slate-900' : 'flex-auto text-lg font-semibold text-slate-900'}>{name}</h4>
            <p className='flex-none text-sm font-medium text-slate-700 '>{type}</p>
          </div>
          <p className='font-semibold text-slate-500'>{parseCurrency(selected.price)}</p>
        </div>

        <div className="flex flex-col mt-3 space-y-3 text-sm">
          <RadioGroup value={selected} onChange={setSelected} className='flex flex-row'>
            <div className='flex space-x-3'>
              {types.map((type, i) => (
                <RadioGroup.Option key={i} value={type}>
                  {({ checked }) => (
                    <RadioGroup.Description className='flex items-center cursor-pointer'>
                      <span className={checked ? 
                        'px-4 py-2 h-10 font-semibold rounded-md border border-black bg-black text-white'
                        :
                        'px-4 py-2 h-10 font-semibold rounded-md border border-slate-600 text-slate-700'
                      }>{type.cantidad}Lt</span>                    
                    </RadioGroup.Description>
                  )}
                </RadioGroup.Option>
              ))}
            </div>

          </RadioGroup>          
          <Link 
          href={`https://wa.me/542214205694?text=${encodeURIComponent(text)}`}
          >
            <button className="h-10 px-6 font-semibold rounded-md bg-green-800 text-white" type='button'>
              Pedir por WhatsApp
            </button>

          </Link>
        </div>
      </div>
    </div>
  )
}

export default BarrilProduct