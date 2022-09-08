import { useSelector } from "react-redux";
import PageLayout from "../components/PageLayout";

export default function Cart(){
  const cart = useSelector(state => state.cart)

  return (
    <PageLayout title="Räuber - Finalizar pedido">
      <div>
        <h1>Finalizar pedido</h1>
        <div>
          {cart.length > 0 && cart.map((prod) => (
            <div key={prod.id}>
              <h3>{prod.name}</h3>
              <p>{prod.price}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}