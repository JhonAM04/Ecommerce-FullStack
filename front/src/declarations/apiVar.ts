type Genero = {
    id: number
    descripcion: string
}

type Talla = {
    id: number
    descripcion: string
}

type Categoria = {
    id: number
    descripcion: string
}


export type Productos = {
    id: number
    genero: Genero
    talla: Talla
    categoria: Categoria
    nombre: string
    precio: number
    stock: number
    activo: 'A'|'I'
    imagen: string
}

export type Perfil = {
    id: number
    nombre: string
    apellido: string
    email: string
    username: string
}

type detallesPedido = {
    producto: number
    cantidad: number
    precioUnitario: number
    subtotal: number
}

export type PedidosUsuario = {
    id: number
    usuario: number
    fecha: Date
    total: number
    detalles: Array<detallesPedido>
}
    
    
