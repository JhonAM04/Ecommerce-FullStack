
import 'swiper/css'
import 'swiper/css/navigation'
import video from '../assets/home.mov'
import Hombres from '../assets/hombre.jpg'
import Mujeres from '../assets/mujeres.jpg'
import kids from '../assets/niños.jpg'


const Home = () => {
  return (
    <>
      <section className='w-full relative '>
        <div className='flex flex-col items-start justify-center h-full absolute px-[50px] pt-16 gap-4'>
          <h1 className='font-bold text-7xl max-w-[100px]'>Eclat Boutique</h1>
          <p className='font-bold max-w-[240px]'>Descubre moda unica para cada momento de tu vida</p>
          <button className='bg-black text-white p-3'>COMPRAR AHORA</button>
        </div>
        <video muted autoPlay loop className="w-full max-h-200 object-cover z-0">
          <source src={video} />
        </video>
      </section>

      <section className='pb-5'>
        <div className='flex justify-around items-center gap-4 px-[50px]'>
          <div className='flex flex-col items-start gap-2'>
            <h3 className='font-bold text-2xl max-w-[220px] text-[#886527]'>TENDENCIAS QUE ARRASAN</h3>
            <p className='max-w-[300px]'>Explora nuestra seleccion mas popular: ropa pensada para toda la familia, con diseños que marcan tendencia en cada temporada</p>
            <button className='bg-[#F8C264] p-2 font-bold'>IR A LA TIENDA</button>
          </div>
          <div>
            <p className='absolute p-2'>HOMBRES</p>
            <img className='size-[350px]' src={Hombres}/>
          </div>
          <div>
            <p className='absolute p-2'>MUJERES</p>
            <img className='size-[350px]' src={Mujeres}/>
          </div>
          <div>
            <p className='absolute p-2'>NIÑOS</p>
            <img className='size-[350px]' src={kids}/>
          </div>
        </div>
      </section>
     
    </>
  )
}

export default Home