import { useNavigate } from "react-router-dom"
import CuantityProducts from "../shared/components/CuantityProducts"
import { CarritoStore } from "../shared/store/CarritoStore"
import { Paths } from "../router/Routes"
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'


const CarritoPage = () => {
    const Navigate = useNavigate()
    const {Productos} = CarritoStore()
    const [open, setOpen] = useState(false)
    const session = localStorage.getItem('session')
    const subtotal = Productos.reduce((acc, p) => {
        return acc + (p.cantidad * p.producto.precio)
    }, 0)

    const ConfirmarCompra = () => {
        Navigate(Paths.ConfirmacionCompra,{
            state: {acceso:true}
        })
    }

  return (
    <div className="flex flex-col justify-center items-center h-[85vh]">

        <div className="border-2 border-[#886527] rounded-[10px] flex flex-col justify-center items-center w-[800px] p-5 gap-[10px]">

            <h1 className="font-bold">Carrito de compra</h1>

            <table className="table-auto border-collapse w-full">
                <thead className="border-b-1 border-gray-400">
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
            <div className="flex justify-between w-full border-y-1">
            
                <h3>Subtotal</h3>
                <p> S/.{subtotal}</p>
            
            </div>

            <button onClick={() => {session? ConfirmarCompra(): setOpen(true) }} className="border-1 p-2 bg-[#FFD8A7]">
             Realizar compra
            </button>
            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                    transition
                    className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                            <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                            No hay una session
                            </DialogTitle>
                            <div className="mt-2">
                            <p className="text-sm text-gray-500">
                                Necesitas logearte para poder continuar con la compra
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                        type="button"
                        onClick={() => Navigate(Paths.Login)}
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                        >
                        Logearse
                        </button>
                        <button
                        type="button"
                        data-autofocus
                        onClick={() => setOpen(false)}
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        >
                        Cancel
                        </button>
                    </div>
                    </DialogPanel>
                </div>
                </div>
            </Dialog>
            
          


        </div>
    </div>
  )
}

export default CarritoPage