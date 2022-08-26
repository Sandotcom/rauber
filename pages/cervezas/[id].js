import PageLayout from "../../components/PageLayout"
import cervezas from "../../constants/cervezas"

export default function Cerveza({ estilo }){
  
  return (
    <PageLayout title={estilo.name}>
      <h3>{estilo.name}</h3>
      <p>{estilo.description}</p>
      <img src={estilo.image[1]} alt={estilo.name} />
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