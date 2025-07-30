import { create } from "zustand"
import type { Productos } from "../../declarations/apiVar"
import { toast } from "sonner"

export type CartItem = {
  producto: Productos
  cantidad: number
}

export type detalles = {
  producto: number
  cantidad: number
  precioUnitario: number
  subtotal: number
}

type Cart = {
  Productos: CartItem[]
  Detalles: detalles[]
  agregar: (product: Productos) => void
  eliminar: (productId: number) => void
  disminuir: (product: Productos) => void
  vaciar: () => void
}

export const CarritoStore = create<Cart>((set) => ({
  Productos: [],
  Detalles: [],

  agregar: (producto: Productos) =>
    set((prev) => {
      toast.success("Producto agregado al carrito")

      const exist = prev.Productos.find(item => item.producto.id === producto.id)
      let nuevosProductos: CartItem[]

      if (exist) {
        nuevosProductos = prev.Productos.map(item =>
          item.producto.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      } else {
        nuevosProductos = [...prev.Productos, { producto, cantidad: 1 }]
      }

      return {
        Productos: nuevosProductos,
        Detalles: nuevosProductos.map(item => ({
          producto: item.producto.id,
          cantidad: item.cantidad,
          precioUnitario: item.producto.precio,
          subtotal: item.cantidad * item.producto.precio
        }))
      }
    }),

  eliminar: (productoID: number) =>
    set((prev) => {
      const nuevosProductos = prev.Productos.filter(item => item.producto.id !== productoID)

      return {
        Productos: nuevosProductos,
        Detalles: nuevosProductos.map(item => ({
          producto: item.producto.id,
          cantidad: item.cantidad,
          precioUnitario: item.producto.precio,
          subtotal: item.cantidad * item.producto.precio
        }))
      }
    }),

  disminuir: (producto: Productos) =>
    set((prev) => {
      const nuevosProductos = prev.Productos
        .map(item =>
          item.producto.id === producto.id
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter(item => item.cantidad > 0) // quitar si llega a 0

      return {
        Productos: nuevosProductos,
        Detalles: nuevosProductos.map(item => ({
          producto: item.producto.id,
          cantidad: item.cantidad,
          precioUnitario: item.producto.precio,
          subtotal: item.cantidad * item.producto.precio
        }))
      }
    }),

  vaciar: () => set({
    Productos: [],
    Detalles: []
  })
}))
