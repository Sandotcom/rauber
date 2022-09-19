import BarrilProduct from "../../components/BarrilProduct";
import PageLayout from "../../components/PageLayout";
import barriles from "../../constants/barriles";

export default function Alquiler(){
  return (
    <PageLayout title="Räuber - Alquiler de barril" >
      <div className="flex flex-col p-4 space-y-2 md:max-w-screen-xl">
        <h2 className='font-semibold text-xl py-4'>Nuestros barriles</h2>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col md:grid md:grid-cols-2 gap-4'>
            {barriles.map((product, i) => (
              <BarrilProduct key={i} product={product} />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}