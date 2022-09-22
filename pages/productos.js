import PageLayout from "../components/PageLayout"
import Product from "../components/Product"
import cervezas from '../constants/cervezas'

export default function Tienda({ data }) {
  return (
    <PageLayout title="Räuber - Tienda Online">
      <div className="flex flex-col p-4 space-y-2 md:max-w-screen-xl">
        <h2 className='font-semibold text-xl py-4'>Nuestros productos</h2>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col md:grid md:grid-cols-2 gap-4'>
            {data.map((product, i) => (     
              <Product key={i} product={product} />
              ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export async function getStaticProps(){
  const data = cervezas

  return {
    props: { data }
  }
}