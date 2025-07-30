
import 'swiper/css'
import 'swiper/css/navigation'
import video from '../assets/home.mov'
import Hombres from '../assets/hombre.jpg'
import Mujeres from '../assets/mujeres.jpg'
import kids from '../assets/niños.jpg'
import { useNavigate } from 'react-router-dom'
import { Paths } from '../router/Routes'


const Home = () => {
  const Navigate = useNavigate()
  return (
    <>
      <section className='w-full relative '>
        <div className='flex flex-col items-start justify-center h-full absolute px-[50px] md:pt-16 pt-3 gap-4'>
          <h1 className='font-bold md:text-7xl text-2xl max-w-[100px]'>Eclat Boutique</h1>
          <p className='font-bold max-w-[240px]'>Descubre moda unica para cada momento de tu vida</p>
          <button onClick={()=> Navigate(Paths.Products)} className='bg-black text-white md:p-3 p-1 z-10'>COMPRAR AHORA</button>
        </div>
        <video muted autoPlay loop className="w-full max-h-200 object-cover z-0">
          <source src={video} />
        </video>
      </section>

      <section className='pb-5'>
        <div className='md:flex justify-around items-center gap-4 px-[50px]'>
          <div className='flex flex-col items-start gap-2'>
            <h3 className='font-bold text-2xl max-w-[220px] text-[#886527]'>TENDENCIAS QUE ARRASAN</h3>
            <p className='max-w-[300px]'>Explora nuestra seleccion mas popular: ropa pensada para toda la familia, con diseños que marcan tendencia en cada temporada</p>
            <button className='bg-[#F8C264] p-2 font-bold max-md:mb-[20px]'>IR A LA TIENDA</button>
          </div>
          <div className='max-md:mb-[20px]'>
            <p className='absolute p-2'>HOMBRES</p>
            <img className='size-[350px]' src={Hombres}/>
          </div>
          <div className='max-md:mb-[20px]'>
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