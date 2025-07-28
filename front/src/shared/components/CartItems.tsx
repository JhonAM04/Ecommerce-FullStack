
import type { CartItem } from "../store/CarritoStore"
import CuantityProducts from "./CuantityProducts"


const CartItems = ({producto}:{producto:CartItem}) => {
  return (
    <div className="flex justify-between items-center">
        <h1 className="max-w-[200px]">{producto.producto.nombre}</h1>
        <CuantityProducts producto={producto} />
        <p>S/.{producto.cantidad * producto.producto.precio}</p>
    </div>
  )
}

export default CartItems