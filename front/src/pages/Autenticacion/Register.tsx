import Api from "../../shared/hooks/Api"
import registrobanner from '../../assets/registroo.png'
import { Link } from "react-router-dom"
import { Paths } from "../../router/Routes"


const Register = () => {
    const {ApiRegister} = Api()
    const RegisterFunction = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formulario = e.currentTarget

        if(formulario){
            const data = new FormData(formulario)
            const {usuario, nombre, apellido, email, password} = Object.fromEntries(data.entries()) as {
                [k:string]:string
            }

            await ApiRegister(usuario, nombre, apellido, email, password)
        }

    }
  return (
    <section className="w-full h-screen md:flex max-md:px-[20px] justify-evenly items-center bg-[#FFE6BD] ">
        <form className="flex flex-col justify-around items-center border-2 border-solid rounded-md shadow-xl md:w-[400px] h-[fit-content] p-[40px] gap-2 bg-[#FFD8A7]" onSubmit={RegisterFunction} >
          <h1 className="font-bold text-2xl">Registrate!!!</h1>
          <div className="w-full">
            <label  className="block text-sm font-medium text-gray-900 dark:text-white">Usuario:</label>
            <input type="text" name="usuario" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="w-full">
            <label  className="block text-sm font-medium text-gray-900 dark:text-white">Nombre:</label>
            <input type="text" name="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="w-full">
            <label  className="block text-sm font-medium text-gray-900 dark:text-white">Apellidos:</label>
            <input type="text" name="apellido" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-900 dark:text-white">Correo electronico:</label>
            <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="w-full">
            <label  className="block text-sm font-medium text-gray-900 dark:text-white">Contraseña:</label>
            <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <Link to={Paths.Login} className="underline">Vuelve al login!</Link>
          <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-[20px] text-sm w-full p-[8px] dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Registrar</button>
        </form>
        <img src={registrobanner} />
    </section>
  )
}

export default Register