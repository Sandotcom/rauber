import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { validateAddNumber, validateAddress, validateEntrecalles, validateInput, validateName } from "./validateForm";

const Form = () => {
  const cart = useSelector((state) => state.cart);
  const [method, setMethod] = useState("Efectivo");
  const [input, setInput] = useState({ name: "", address: "", addNumber: "", entrecalles: "", depto: "", paymentMethod: method });
  const [error, setError] = useState({})

  const text = useMemo(
    () =>
      `Hola! Este es mi pedido:\n`
        .concat(
          cart.reduce(
            (message, product) =>
              message.concat(
                `* ${product.name} (${product.quantity}) - $${
                  product.price * product.quantity
                }\n`
              ),
            ``
          )
        )
        .concat(
          `\nNombre: ${input.name}\nDireccion: ${input.address} N° ${
            input.addNumber
          } ${input.depto && `\nPiso/Depto: ${input.depto}`} ${
            input.entrecalles && `\nEntre calles: ${input.entrecalles}`
          } \nMetodo de pago: ${input.paymentMethod}\n`
        )
        .concat(
          `\nTotal: $${cart.reduce(
            (total, product) => total + product.price * product.quantity,
            0
          )}`
        ),
    [cart, input]
  );

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleMethod = (e) => {
    setMethod(e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const setErrorName = () => {
    let hasError = validateName(input)

    if(hasError !== undefined){
      setError({
        ...error, name: hasError
      })
    } else {
      delete error.name
      setError({...error})
    }
  }

  const setErrorAddress = () => {
    let hasError = validateAddress(input)

    if(hasError !== undefined){
      setError({
        ...error, address: hasError
      })
    } else {
      delete error.address
      setError({...error})
    }
  }

  const setErrorAddNumber = () => {
    let hasError = validateAddNumber(input)

    if(hasError !== undefined){
      setError({
        ...error, addNumber: hasError
      })
    } else {
      delete error.addNumber
      setError({...error})
    }
  }

  const setErrorEntrecalles = () => {
    let hasError = validateEntrecalles(input)

    if(hasError !== undefined){
      setError({
        ...error, entrecalles: hasError
      })
    } else {
      delete error.entrecalles
      setError({...error})
    }
  }

  const onClick = (e) => {
    e.preventDefault()

    let hasError = validateInput(input)
    setError(hasError)
  }

  return (
    <form>
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre completo
          </label>
          <input
            type="text"
            name="name"
            onChange={handleInput}
            onBlur={setErrorName}
            autoComplete="name"
            className={error.name ?
              "mt-1 block w-full rounded-md border border-red-700 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              : "mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            }
          />
          {error.name && <p className="m-1 text-xs text-red-700">{error.name}</p>}
        </div>

        <div className="col-span-4 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Calle
          </label>
          <input
            type="text"
            name="address"
            onChange={handleInput}
            onBlur={setErrorAddress}
            autoComplete="off"
            className={error.address ?
              "mt-1 block w-full rounded-md border border-red-700 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              : "mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            }
          />
          {error.address && <p className="m-1 text-xs text-red-700">{error.address}</p>}  
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Numero
          </label>
          <input
            type="text"
            name="addNumber"
            onChange={handleInput}
            onBlur={setErrorAddNumber}
            autoComplete="off"
            className={error.addNumber ?
              "mt-1 block w-full rounded-md border border-red-700 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              : "mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            }
          />
          {error.addNumber && <p className="m-1 text-xs text-red-700">{error.addNumber}</p>}
        </div>

        <div className="col-span-4 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Entre calles
          </label>
          <input
            type="text"
            name="entrecalles"
            onChange={handleInput}
            onBlur={setErrorEntrecalles}
            autoComplete="off"
            className={error.entrecalles ?
              "mt-1 block w-full rounded-md border border-red-700 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              : "mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            }
          />
          {error.entrecalles && <p className="m-1 text-xs text-red-700">{error.entrecalles}</p>}
        </div>

        <div className="col-span-2 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Piso/Depto
          </label>
          <input
            type="text"
            name="depto"
            onChange={handleInput}
            autoComplete="off"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Método de pago
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={method}
            onChange={handleMethod}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            <option value="Efectivo">Efectivo</option>
            <option value="Transferencia">Transferencia</option>
            <option value="Mercado Pago">Mercado Pago</option>
          </select>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
        {!input.name || !input.address || !input.addNumber || !input.entrecalles || cart.length === 0 ?
          <button
            type='button'
            onClick={onClick}
            className="inline-flex justify-center rounded-md border border-transparent bg-green-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2"
          >
            Finalizar
          </button>
          :
          <Link 
          href={`https://wa.me/542214205694?text=${encodeURIComponent(text)}`}
          >
          <button
            type='button'
            className="inline-flex justify-center rounded-md border border-transparent bg-green-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2"
          >
            Finalizar
          </button>
        </Link>
        }        
      </div>
    </form>
  );
};

export default Form;
