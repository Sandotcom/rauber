import { useDispatch } from "react-redux"
import { addItem } from "../../app/actions"
import PageLayout from "../../components/PageLayout"
import cervezas from "../../constants/cervezas"
import parseCurrency from "../../constants/parseCurrency"

export default function Cerveza({ estilo }){
  const { id, name, type, description, price, portada, image } = estilo
  const dispatch = useDispatch()

  const onClick = (e, estilo) => {
    e.preventDefault()
    dispatch(addItem(estilo))
  }
  
  return (
    <PageLayout title={`Räuber - ${name}`}>
      <div className="flex flex-col font-poppins text-slate-800">
        <div className='relative'>
          <img src={image[0]} alt={name} className='w-full h-full md:w-48 md:h-48 object-cover' />
        </div>
        <div className="px-4 py-6 font-semibold">
          <h1 className=" text-slate-900 text-3xl">{name}</h1>
          <p className="text-xl font-semibold mt-2 text-slate-500">{parseCurrency(price)}</p>

          <div className="mt-6 space-y-2">
            <h3 className="text-lg">Detalle</h3>
            <p className="font-zilla">{description}</p>
          </div>
        </div>

        <div className="w-full items-center px-4">
          <button className="h-10 w-full font-semibold rounded-md bg-black text-white" type='button' onClick={(e) => onClick(e, estilo)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </PageLayout>
  )
}

export async function getStaticProps({ params }) {

  const data = cervezas.find(e => e.id === params.id)

  return {
    props: { estilo: data }
  }
}

export async function getStaticPaths() {

  const paths = cervezas.map(e => {
    return { params: { id: e.id }}
  })

  return {
    paths,
    fallback: false
  }
}