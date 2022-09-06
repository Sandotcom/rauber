import PageLayout from "../components/PageLayout"
import Products from "../components/Products"

export default function Tienda() {
  return (
    <PageLayout title="Tienda Online Räuber">
      <div>
        <h2>Tienda online</h2>
        <Products />
      </div>
    </PageLayout>
  )
}