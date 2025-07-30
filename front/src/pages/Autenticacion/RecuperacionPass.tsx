import { Link } from 'react-router-dom'
import item1 from '../../assets/loginbanner.png'
import Api from '../../shared/hooks/Api'
import { Paths } from '../../router/Routes'

const RecuperacionPass = () => {

    const {SolicitudCambioPass} = Api()

    const Consulta = async(e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    const formulario = e.currentTarget

        if(formulario){
        const data = new FormData(formulario)
        const {correo} = Object.fromEntries(data.entries()) as {
            [k:string]: string
        }
        SolicitudCambioPass(correo)
        }
    }
  return (
    <section className="w-full h-screen md:flex max-md:px-[20px] justify-evenly items-center bg-[#FFE6BD] ">
      <img src={item1} className="h-full max-md:size-[350px]" />
        <form className="flex flex-col items-center justify-around border-2 border-solid rounded-md shadow-xl px-[50px] md:w-[400px] h-[450px] bg-[#FFD8A7]" onSubmit={Consulta}>
          <h1 className='font-bold'>Recuperacion de Contraseña</h1>
          <div className="w-full">
            <label  className="block text-sm font-medium text-gray-900 dark:text-white">Correo Electronico:</label>
            <input type="text" name="correo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <Link to={Paths.Login} className="underline">Volver</Link>
          <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-[20px] text-sm w-full p-[10px] dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Enviar</button>
        </form>
    </section>
  )
}

export default RecuperacionPass