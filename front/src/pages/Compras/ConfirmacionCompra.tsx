import { useState } from "react"
import Api from "../../shared/hooks/Api"
import { CarritoStore } from "../../shared/store/CarritoStore"
import ModalCompra from "../../shared/components/ModalCompra"


const ConfirmacionCompra = () => {
    const {Productos, Detalles} = CarritoStore()
    const {RegistrarPedido} = Api()
    const tokken = JSON.parse(localStorage.getItem('session')!)
    const [modalOpen, setModalOpen] = useState(false)
    const [datosCliente, setDatosCliente] = useState({
        nombre: '',
        apellido: '',
        direccion: '',
        documento: '',
        telefono: '',
        ciudad: '',
        distrito: '',
        entrega: ''
        })

    const total = Productos.reduce((acc, p) => {
        return acc + (p.cantidad * p.producto.precio)
    }, 0)

    const CrearPedido = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget

        const data = new FormData(form)
        const {nombre, apellido, direccion, documento, telefono, ciudad, distrito, entrega} = Object.fromEntries(data.entries()) as { [k:string]:string }
        const exito = await RegistrarPedido(tokken?.access, Detalles)
        if(exito){
            setDatosCliente({nombre,apellido,direccion,documento,telefono,ciudad,distrito,entrega})
            setModalOpen(true)
        }
    }

  return (
    <div className="md:flex max-md:px-[10px] justify-around mt-[100px] w-full h-[85vh]">
        
        <div className="flex flex-col md:w-[500px]" id="Form">
            <form className="flex flex-col gap-4" onSubmit={CrearPedido} >
                <h3 className="font-bold">Modalidad de entrega:</h3>
                <div className="flex">
                    <input name="entrega" type="radio" value='recogo' required/>
                    <label>Recogo en tienda</label>
                </div>
                <div className="flex">
                    <input name="entrega" type="radio" value='domicilio' required/>
                    <label>Envio a domicilio</label>
                </div>
                <div className="md:flex max-md:flex max-md:flex-col max-md:gap-4 justify-between">
                    <input className="border rounded-[8px] h-[40px] md:w-[230px] max-md:w-full" type="text" name="nombre" placeholder="Nombre" required />
                    <input className="border rounded-[8px] h-[40px] md:w-[230px] max-md:w-full" type="text" name="apellido" placeholder="Apellido" required/>
                </div>

                <input className="border rounded-[8px] h-[40px]" type="text" name="direccion" placeholder="Direccion de domicilio" required />

                <div className="md:flex max-md:flex max-md:flex-col max-md:gap-4 justify-between">
                    <input className="border rounded-[8px] h-[40px] md:w-[230px] max-md:w-full" type="number" name="documento" placeholder="DNI,CE O RUC" required />
                    <input className="border rounded-[8px] h-[40px] md:w-[230px] max-md:w-full" type="number" name="telefono" placeholder="Telefono" required />
                </div>
                
                <input className="border rounded-[8px] h-[40px]" type="text" name="referencias" placeholder="Referencias" required />

                <div className="md:flex max-md:flex max-md:flex-col max-md:gap-4 justify-between">
                    <input className="border rounded-[8px] h-[40px] md:w-[230px] max-md:w-full" type="text" name="ciudad" placeholder="Ciudad" required />
                    <input className="border rounded-[8px] h-[40px] md:w-[230px] max-md:w-full" type="text" name="distrito" placeholder="Distrito" required />
                </div>

                <h3 className="font-bold">Metodo de pago:</h3>
                <p>Todas las transacciones son seguras y estan encriptadas</p>
                <div className="grid grid-cols-2 gap-2">
                    <button className="border-1 rounded-[10px]">Tarjeta de Credito</button>
                    <button className="border-1 rounded-[10px]">Tarjeta de Debito</button>
                    <button className="border-1 rounded-[10px]">Yape/Plin</button>
                    <button className="border-1 rounded-[10px]">Efectivo</button>

                </div>
                
                <button type="submit" className="border-1 rounded-[10px] bg-[#FFD8A7] max-md:mb-[10px]">Realizar Pedido</button>
            </form>

            <ModalCompra
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            products={Productos}
            nombre={datosCliente.nombre}
            apellido={datosCliente.apellido}
            ciudad={datosCliente.ciudad}
            direccion={datosCliente.direccion}
            distrito={datosCliente.distrito}
            documento={datosCliente.documento}
            modalidad={datosCliente.entrega}
            telefono={datosCliente.telefono}
            />

        </div>

        <div className="flex flex-col h-[fit-content] md:w-[500px] gap-2 border-2 border-[#886527] p-5 rounded-[6px]" id='VistaPrevia'>
                {
                    Productos.map(p=>(
                        <div className="flex items-center justify-between w-full" key={p.producto.id}>
                            <img src={p.producto.imagen} className="size-[150px]" />
                            <div className="flex flex-col"> 
                            <p className="max-w-[250px]">{p.producto.nombre}</p>
                            <p>X{p.cantidad}</p>
                            </div>
                            <p>S/.{p.cantidad*p.producto.precio}</p>
                        </div>
                    ))
                }

                <div className="flex justify-between w-full">
                    <p>Subtotal:</p>
                    <p>{total}</p>
                </div>
                <div className="flex justify-between w-full">
                    <p>Envio:</p>
                    <p>Gratis</p>
                </div>
                <div className="flex justify-between w-full">
                    <p className="font-bold text-2xl">Total:</p>
                    <p className="font-bold text-2xl">{total}</p>
                </div>
        </div>

    </div>
  )
}

export default ConfirmacionCompra