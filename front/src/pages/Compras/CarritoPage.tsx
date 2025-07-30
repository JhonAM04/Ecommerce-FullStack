import { useNavigate } from "react-router-dom"
import CuantityProducts from "../../shared/components/CuantityProducts"
import { CarritoStore } from "../../shared/store/CarritoStore"
import { Paths } from "../../router/Routes"
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const CarritoPage = () => {
  const Navigate = useNavigate()
  const { Productos } = CarritoStore()
  const [open, setOpen] = useState(false)
  const session = localStorage.getItem('session')
  const subtotal = Productos.reduce((acc, p) => acc + (p.cantidad * p.producto.precio), 0)

  const ConfirmarCompra = () => {
    Navigate(Paths.ConfirmacionCompra, { state: { acceso: true } })
  }

  return (
    <div className="flex flex-col justify-center items-center px-4 pt-15 min-h-[85vh]">
      <div className="border-2 border-[#886527] rounded-[10px] flex flex-col items-center w-full md:w-[800px] p-5 gap-4">

        <h1 className="font-bold text-lg">Carrito de compra</h1>

        {/* Tabla para pantallas medianas y grandes */}
        <div className="hidden md:block w-full overflow-x-auto">
          <table className="table-auto border-collapse w-full min-w-[600px]">
            <thead className="border-b border-gray-400">
              <tr>
                <th className="text-left py-2">Producto</th>
                <th className="text-left py-2">Precio</th>
                <th className="text-left py-2">Cantidad</th>
                <th className="text-left py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {Productos.map(p => (
                <tr key={p.producto.id} className="border-b">
                  <td className="flex items-center gap-3 py-2">
                    <img src={p.producto.imagen} className="size-[100px]" />
                    <p className="max-w-[250px] truncate">{p.producto.nombre}</p>
                  </td>
                  <td>S/.{p.producto.precio}</td>
                  <td><CuantityProducts producto={p} /></td>
                  <td>S/.{p.cantidad * p.producto.precio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Diseño en columna para pantallas pequeñas */}
        <div className="block md:hidden w-full">
          {Productos.map(p => (
            <div key={p.producto.id} className="border rounded p-4 mb-4 flex flex-col gap-2">
              <div className="flex gap-4 items-center">
                <img src={p.producto.imagen} className="w-24 h-24 object-cover" />
                <p className="font-bold">{p.producto.nombre}</p>
              </div>
              <div className="flex justify-between">
                <span>Precio:</span>
                <span>S/.{p.producto.precio}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Cantidad:</span>
                <CuantityProducts producto={p} />
              </div>
              <div className="flex justify-between">
                <span>Total:</span>
                <span>S/.{p.cantidad * p.producto.precio}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Subtotal y botón de compra */}
        <div className="flex justify-between w-full border-t border-gray-300 pt-4">
          <h3 className="font-semibold">Subtotal</h3>
          <p className="font-semibold">S/.{subtotal}</p>
        </div>

        <button
          onClick={() => { session ? ConfirmarCompra() : setOpen(true) }}
          className="border px-4 py-2 bg-[#FFD8A7] font-semibold rounded"
        >
          Realizar compra
        </button>

        {/* Modal de sesión */}
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
                        No hay una sesión
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
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Logearse
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancelar
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
