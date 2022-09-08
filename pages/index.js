import PageLayout from '../components/PageLayout'
import Products from '../components/Products'

export default function Home() {
  return (
    <PageLayout title='Räuber Cerveza Artesanal'>
      <div className='flex flex-col'>
        <div className='flex flex-col md:grid md:grid-cols-2'>

          <div className='px-4 py-4 md:px-20'>
            <img className='w-auto h-auto rounded-xl' src='/banner1.jpg' />
          </div>
          <div className=''>
            <h2>¿Quiénes somos?</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel vehicula nisi. Quisque congue ut nunc vel fermentum. Donec malesuada pharetra suscipit. 
            Nulla enim tortor, accumsan a tincidunt congue, viverra in ante. Suspendisse non eleifend mi. Aenean eu dui pharetra dui vestibulum vulputate. 
            Duis feugiat pretium risus pretium porta. Morbi pulvinar sed sapien in tempor. Proin varius consequat enim in sollicitudin. 
            Vestibulum quis tellus vitae mi efficitur aliquet a a enim. Sed accumsan, lacus mattis accumsan consequat, sapien nisi mattis nisi, vel malesuada orci arcu quis orci.
            Cras lacinia ultrices quam, eu malesuada mi consectetur eu. Suspendisse et cursus nisl. Cras sit amet sem auctor, aliquet augue ac, pharetra erat.
            In suscipit lectus vitae felis imperdiet molestie.
            Vestibulum laoreet lacus sed erat luctus tincidunt. Nullam non pretium tortor. Cras a mi libero. In placerat ex ullamcorper leo aliquet, eu iaculis leo posuere.
            Suspendisse potenti. Quisque et lorem sit amet turpis mollis tincidunt. Etiam ultrices vel nulla tincidunt maximus. Nam tincidunt aliquet lacinia.
            Sed quis egestas felis. Aliquam consectetur neque quis augue porta vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Pellentesque at erat ut est sagittis luctus et sit amet sem. Nunc venenatis ut mauris eu ullamcorper. Mauris interdum venenatis libero quis rutrum.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean finibus mi sit amet erat fermentum finibus.
            </p>
          </div>
          

        </div>

        {/* <Products /> */}

        <div>
          <h2>Logros</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel vehicula nisi. Quisque congue ut nunc vel fermentum. Donec malesuada pharetra suscipit. 
            Nulla enim tortor, accumsan a tincidunt congue, viverra in ante. Suspendisse non eleifend mi. Aenean eu dui pharetra dui vestibulum vulputate.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
