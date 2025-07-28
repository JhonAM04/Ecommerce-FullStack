import { useNavigate } from "react-router-dom"
import CuantityProducts from "../shared/components/CuantityProducts"
import { CarritoStore } from "../shared/store/CarritoStore"
import { Paths } from "../router/Routes"


const CarritoPage = () => {
    const Navigate = useNavigate()
    const {Productos} = CarritoStore()
    const subtotal = Productos.reduce((acc, p) => {
        return acc + (p.cantidad * p.producto.precio)
    }, 0)

  return (
    <div className="flex flex-col justify-center items-center h-[85vh]">

        <div className="border-2 flex flex-col justify-center items-center w-[800px] px-5">

            <h1>Carrito de compra</h1>

            <table className="table-auto border-separate border-spacing-y-3 border-spacing-x-6 w-full">
                <thead>
                    <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Productos.map(p => (
                            <tr key={p.producto.id}>
                                <td className="flex items-center">
                                    <img src={p.producto.imagen} />
                                    <p className="max-w-[250px]">{p.producto.nombre}</p>
                                    </td>
                                <td>S/.{p.producto.precio}</td>
                                <td><CuantityProducts producto={p}/></td>
                                <td>S/.{p.cantidad * p.producto.precio}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="flex justify-between w-full">
            
                <h3>Subtotal</h3>
                <p> S/.{subtotal}</p>
            
            </div>

            <button onClick={()=> Navigate(Paths.ConfirmacionCompra)}>Realizar compra</button>

        </div>

    </div>
  )
}

export default CarritoPage