
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { TiShoppingCart } from "react-icons/ti"
import { CarritoStore } from '../store/CarritoStore'
import CartItems from './CartItems'
import { useNavigate } from 'react-router-dom'
import { Paths } from '../../router/Routes'


export default function Example() {
  const [open, setOpen] = useState(false)
  const {Productos, vaciar} = CarritoStore()
  const Navigate = useNavigate()

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="rounded-md px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10"
      >
        <TiShoppingCart size={35} />
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-99">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
              >
                <TransitionChild>
                  <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="relative rounded-md text-gray-300 hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
                    >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon aria-hidden="true" className="size-6" />
                    </button>
                  </div>
                </TransitionChild>
                <div className="flex md:h-[95vh] max-md:h-[90vh] mt-12 flex-col overflow-y-auto bg-white py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <DialogTitle className="text-base font-semibold text-gray-900">Carrito</DialogTitle>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    <div className='flex flex-col gap-3'>

                    {
                      Productos.map(item => (
                        <div key={item.producto.id}>
                          <CartItems producto={item} />
                          <hr/>
                        </div>
                        
                      ))
                    }

                    </div>


                  </div>
                  <div className="px-4 sm:px-6 flex justify-between">
                    <button onClick={()=>vaciar()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  w-[100px] h-[50px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Vaciar Carrito</button>
                    {
                      Productos.length >= 1 ?
                       <button onClick={()=> {Navigate(Paths.CarritoPage); setOpen(false)}} className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  w-[100px] h-[50px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Continuar Compra</button> 
                        : 
                       <></>
                    }
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
