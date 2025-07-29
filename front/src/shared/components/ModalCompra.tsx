// ModalCompra.tsx
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { PDFDownloadLink } from "@react-pdf/renderer"
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import { Paths } from '../../router/Routes'
import CompraPDF from '../../pages/PdfRender/CompraPDF'
import type { CartItem } from '../store/CarritoStore'

interface Props {
  open: boolean
  onClose: () => void
  products: CartItem[]
  nombre: string 
  apellido: string 
  direccion: string
  modalidad: string
  telefono: string
  documento: string
  ciudad: string
  distrito: string
}

const ModalCompra = ({ open, onClose, products, nombre, apellido, ciudad, direccion, distrito, documento, telefono, modalidad }: Props) => {
  const Navigate = useNavigate()
  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-md">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:size-10">
                  <CheckCircleIcon className="size-6 text-green-600" aria-hidden="true" />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle as="h3" className="text-lg font-semibold text-gray-900">
                    ¡Pedido exitoso!
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">Tu pedido ha sido realizado con éxito, a continuacion se le adjunta la Boleta:</p>
                    <PDFDownloadLink document={<CompraPDF items={products} datosCliente={{
                        nombre: nombre,
                        apellido: apellido,
                        direccion: direccion,
                        modalidad: modalidad,
                        telefono: telefono,
                        documento: documento,
                        ciudad: ciudad,
                        distrito: distrito
                      }}/>} fileName="Boleta de compra">
                        Descargar
                    </PDFDownloadLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse">
              <button
                onClick={()=>{onClose; Navigate(Paths.Home)}}
                className="inline-flex w-full justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-500 sm:w-auto"
              >
                OK
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default ModalCompra
