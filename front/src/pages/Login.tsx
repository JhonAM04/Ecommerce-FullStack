

const Login = () => {
  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center ">
        <form className="flex flex-col justify-around border-1 border-solid rounded-md shadow-xl p-5 w-70 h-100">
          <div>
            <label  className="block text-sm font-medium text-gray-900 dark:text-white">Usuario:</label>
            <input type="text" name="usuario" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white">Contraseña:</label>
            <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Enviar</button>
        </form>
    </section>
  )
}

export default Login