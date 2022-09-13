import { useSelector } from "react-redux";
import PageLayout from "../components/PageLayout";
import Items from '../components/Checkout/Items'
import Form from "../components/Checkout/Form";

export default function Cart(){
  const cart = useSelector(state => state.cart)

  return (
    <PageLayout title="Räuber - Finalizar pedido">
      <div className="mt-5 px-4">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Finalizar pedido
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Completá esta información para finalizar tu pedido.
              </p>
            </div>
          </div>
          <div className="mt-5 border md:col-span-2 md:mt-0">
            <Form />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}