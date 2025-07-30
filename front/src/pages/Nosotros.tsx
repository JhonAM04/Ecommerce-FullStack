import banner from '../assets/nosotros.jpg'
import item1 from '../assets/Trabajo.png'
import mision from '../assets/mision.jpg'
import vision from '../assets/vision.jpg'
import { Paths } from '../router/Routes'
import { useNavigate } from 'react-router-dom'

const Nosotros = () => {
  const Navigate = useNavigate()
  return (
    <>
      <section className="w-full">
        <div className='absolute flex justify-center items-center w-full md:h-[60%] top-[100px] z-10'>
          <h1 className='font-extrabold md:text-5xl text-3xl max-w-[500px] text-center'>"Conectando moda y personas"</h1>
        </div>
        <img src={banner} className='contain-content md:h-[700px] w-full' />
      </section>

      <section className="w-full">
        <div className='md:flex px-[50px] justify-around items-center'>
          <p className='md:w-[450px] md:text-start text-center'>
            Somos una tienda de ropa dedicada a ofrecer moda de calidad para mujeres, hombres y niños. Creemos que el estilo es una forma de expresion y trabajamos día a día
            para traerte prendas que se adapten a tu personalidad y a cada momento de tu vida.
          </p>
          <img src={item1} className='md:max-w-[600px]'/>
        </div>
      </section>

      <section className="w-full bg-[#FFD8A7] py-[30px]">
        <div className='md:flex px-[50px] justify-evenly items-center md:text-start text-center'>
          <div className='flex flex-col'>
            <h3 className='font-bold text-2xl'>Mision:</h3>
            <p className='md:w-[200px]'>Brindar ropa moderna, comoda y de calidad que inspire confianza en nuestros clientes y cubra las necesidades de toda la familia</p>
          </div>
          <img src={mision} className='size-[350px]' />
          <div className='flex flex-col'>
            <h3 className='font-bold text-2xl'>Vision:</h3>
            <p className='md:w-[200px]'>Convertirnos en la tienda de moda preferida en el país, reconocida por su compromiso con el estilo, la innovacion y la satisfaccion de cada cliente</p>
          </div>
          <img src={vision} className='size-[350px]' />
        </div>
      </section>

      <section className="w-full pb-5">
        <div className='flex flex-col justify-center items-center gap-2'>
          <p className='text-3xl max-w-[970px] text-center'>"Descubre nuestras ultimas colecciones y encuentra el look perfecto para ti y tu familia"</p>
          <button onClick={()=> Navigate(Paths.Products)} className='bg-[#F8C264] p-2 font-bold rounded-[10px]'>VER PRODUCTOS</button>
        </div>

      </section>
    
    </>
  )
}

export default Nosotros