import type { Productos } from "../../declarations/apiVar"


const CartItem = ({producto}:{producto:Productos}) => {
  return (
    <div className="flex">
        <h1>{producto.nombre}</h1>
        <p>{producto.precio}</p>
    </div>
  )
}

export default CartItem