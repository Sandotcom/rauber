import PageLayout from "../components/PageLayout"
import Products from "../components/Products"

export default function Tienda() {
  return (
    <PageLayout title="Räuber - Tienda Online">
      <div className="flex flex-col p-4 space-y-2 md:max-w-screen-xl">
        <h2 className='font-semibold text-xl py-4'>Nuestros productos</h2>
        <Products />
      </div>
    </PageLayout>
  )
}