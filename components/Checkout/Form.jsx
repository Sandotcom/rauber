import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const Form = () => {
  const cart = useSelector(state => state.cart)
  const [method, setMethod] = useState("Efectivo");
  const [input, setInput] = useState({
    name: "",
    address: "",
    addNumber: "",
    entrecalles: "",
    depto: "",
    paymentMethod: method,
  });

  const text = useMemo(
    () => 
      `Hola! Este es mi pedido:\n`.concat(cart
                 .reduce(
                   (message, product) => message.concat(`* ${product.name} (${product.quantity}) - $${product.price * product.quantity}\n`),
                   ``
                )).concat(`\nNombre: ${input.name}\nDireccion: ${input.address} N° ${input.addNumber} ${input.depto && `\nPiso/Depto: ${input.depto}`} ${input.entrecalles && `\nEntre calles: ${input.entrecalles}`} \nMetodo de pago: ${input.paymentMethod}\n`)
                .concat(`\nTotal: $${cart.reduce((total, product) => total + product.price * product.quantity, 0)}`)
    , [cart, input]
  )

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

  return (
    <form>
        <div className="bg-white px-4 py-5 sm:p-6">
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
                autoComplete="name"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-4 sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Calle
              </label>
              <input
                type="text"
                name="address"
                onChange={handleInput}
                autoComplete="off"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Numero
              </label>
              <input 
                type='text'
                name='addNumber'
                onChange={handleInput}
                autoComplete="off"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-4 sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Entre calles
              </label>
              <input
                type="text"
                name="entrecalles"
                onChange={handleInput}
                autoComplete="off"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
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
        </div>
        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <Link href={`https://wa.me/542214205694?text=${encodeURIComponent(text)}`}>
            <button
              type="submit"
              disabled={!input.name || !input.address || !input.addNumber || !input.entrecalles}
              className="inline-flex justify-center rounded-md border border-transparent bg-green-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2"
            >
              Finalizar
            </button>
          </Link>
        </div>
    </form>
  );
};

export default Form;
