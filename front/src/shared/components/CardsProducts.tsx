import type { Productos } from "../../declarations/apiVar"


const CardsProducts = ({producto}:{producto:Productos}) => {
  return (
    
        <div className=" max-w-[300px] w-[300px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-[5px]">
            <a href="#">
                <img className="rounded-t-lg" src={producto.imagen} />
            </a>
            <div className="flex flex-col gap-[.5em]">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{producto.nombre}</h5>
                </a>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">S/{producto.precio}</span>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  max-w-[100px] max-h-[100px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar al carrito</a>
                </div>
            </div>
        </div>

  )
}

export default CardsProducts