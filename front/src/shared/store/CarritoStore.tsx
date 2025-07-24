import { create } from "zustand"
import type { Productos } from "../../declarations/apiVar"
import { toast } from "sonner"


export type CartItem = {
    producto : Productos
    cantidad : number
}


type Cart = {
    Productos: CartItem[]
    agregar: (product: Productos) => void
    eliminar: (productId: number) => void
    disminuir: (product: Productos) => void
    vaciar: () => void
}

export const CarritoStore = create<Cart>((set)=>({
    Productos: [],
    agregar: (producto: Productos) => set((prev)=>{
        toast.success('Producto Agregado al carrito')

        const exist = prev.Productos.find(item => item.producto.id == producto.id)

        if(exist){
            return{
                Productos: prev.Productos.map(item => item.producto.id == producto.id? {...item, cantidad: item.cantidad + 1}: item)
            }
        } else{
            return{Productos: [...prev.Productos,{producto, cantidad: 1}]}
        }

    }),

    eliminar: (productoID: number) => set((prev)=>({
        Productos: prev.Productos.filter(item => item.producto.id != productoID)
    })),

    disminuir: (producto: Productos) => set((prev)=>({
        Productos: prev.Productos.map(item => item.producto.id == producto.id ? {...item, cantidad: item.cantidad - 1}: item)
    })),

    vaciar: () => set(()=>({
        Productos: []
    }))
    
}))