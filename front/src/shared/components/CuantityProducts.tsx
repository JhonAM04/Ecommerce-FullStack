import { CarritoStore, type CartItem } from "../store/CarritoStore"


const CuantityProducts = ({producto}:{producto:CartItem}) => {
    const {agregar, disminuir, eliminar} = CarritoStore()
  return (
    <div className="flex gap-3 items-center">
        <button onClick={()=>producto.cantidad >= 2 ? disminuir(producto.producto): eliminar(producto.producto.id)} className="bg-red-500 w-5 p-1 rounded-[5px]">-</button>
        <p>{producto.cantidad}</p>
        <button onClick={()=>agregar(producto.producto)} className="bg-blue-600 w-5 p-1 rounded-[5px]">+</button>
    </div>
  )
}

export default CuantityProducts