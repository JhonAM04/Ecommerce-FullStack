import Api from "../shared/hooks/Api"
import { CarritoStore } from "../shared/store/CarritoStore"

const ConfirmacionCompra = () => {
    const {Productos} = CarritoStore()
    const {RegistrarPedido} = Api()
    const tokken = JSON.parse(localStorage.getItem('session')!)
    const total = Productos.reduce((acc, p) => {
        return acc + (p.cantidad * p.producto.precio)
    }, 0)
    const detalles:any[] = Productos.map(item => ({
        producto: item.producto.id,
        cantidad: item.cantidad,
        precioUnitario: item.producto.precio,
        subtotal: item.cantidad * item.producto.precio
    }))

    const CrearPedido = () => {
        RegistrarPedido(tokken?.access, detalles)
    }

  return (
    <div className="flex justify-around mt-[100px] w-full h-[85vh]">
        
        <div className="flex flex-col w-[500px]" id="Form">
            <form className="flex flex-col gap-4" onSubmit={CrearPedido} >
                <h3>Modalidad de entrega:</h3>
                <div className="flex">
                    <input name="entrega" type="radio" required/>
                    <label>Recogo en tienda</label>
                </div>
                <div className="flex">
                    <input name="entrega" type="radio" required/>
                    <label>Envio a domicilio</label>
                </div>
                <div className="flex justify-between">
                    <input className="border rounded-[8px] h-[40px] w-[230px]" type="text" placeholder="Nombre" required />
                    <input className="border rounded-[8px] h-[40px] w-[230px]" type="text" placeholder="Apellido" required/>
                </div>

                <input className="border rounded-[8px] h-[40px]" type="text" placeholder="Direccion de domicilio" required />

                <div className="flex justify-between">
                    <input className="border rounded-[8px] h-[40px] w-[230px]" type="text" placeholder="DNI,CE O RUC" required />
                    <input className="border rounded-[8px] h-[40px] w-[230px]" type="text" placeholder="Telefono" required />
                </div>
                
                <input className="border rounded-[8px] h-[40px]" type="text" placeholder="Referencias" required />

                <div className="flex justify-between">
                    <input className="border rounded-[8px] h-[40px] w-[230px]" type="text" placeholder="Ciudad" required />
                    <input className="border rounded-[8px] h-[40px] w-[230px]" type="text" placeholder="Distrito" required />
                </div>

                <h3>Metodo de pago:</h3>
                <p>Todas las transacciones son seguras y estan encriptadas</p>
                <div className="grid grid-cols-2 gap-2">
                    <button className="border-2 rounded-[10px]">Tarjeta de Credito</button>
                    <button className="border-2 rounded-[10px]">Tarjeta de Debito</button>
                    <button className="border-2 rounded-[10px]">Yape/Plin</button>
                    <button className="border-2 rounded-[10px]">Efectivo</button>

                </div>
                
                <button type="submit">Realizar Pedido</button>
            </form>

        </div>

        <div className="flex flex-col h-[fit-content] w-[500px] gap-2 border-2 p-5 rounded-[6px]" id='VistaPrevia'>
                {
                    Productos.map(p=>(
                        <div className="flex items-center justify-between w-full" key={p.producto.id}>
                            <img src={p.producto.imagen} />
                            <div className="flex flex-col"> 
                            <p className="max-w-[250px]">{p.producto.nombre}</p>
                            <p>X{p.cantidad}</p>
                            </div>
                            <p>S/.{p.cantidad*p.producto.precio}</p>
                        </div>
                    ))
                }

                <p>Subtotal: {total}</p>
                <p>Envio:</p>
                <p>Total: {total}</p>
        </div>

    </div>
  )
}

export default ConfirmacionCompra