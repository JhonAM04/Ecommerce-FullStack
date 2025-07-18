export type Productos = {
    id: number
    genero: string
    talla: string
    categoria: string
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