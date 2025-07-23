import Api from "../shared/hooks/Api"


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
    <section className="w-screen h-screen flex flex-col justify-center items-center ">
        <form className="flex flex-col justify-around border-1 border-solid rounded-md shadow-xl p-5 w-70 h-100" onSubmit={RegisterFunction} >
          <div>
            <label  className="block text-sm font-medium text-gray-900 dark:text-white">Usuario:</label>
            <input type="text" name="usuario" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div>
            <label  className="block text-sm font-medium text-gray-900 dark:text-white">Nombre:</label>
            <input type="text" name="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div>
            <label  className="block text-sm font-medium text-gray-900 dark:text-white">Apellidos:</label>
            <input type="text" name="apellido" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white">Correo electronico:</label>
            <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div>
            <label  className="block text-sm font-medium text-gray-900 dark:text-white">Contraseña:</label>
            <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Registrar</button>
        </form>
    </section>
  )
}

export default Register