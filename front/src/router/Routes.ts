import { lazy } from "react"

export const Elements = {
    Home: lazy(()=> import('../pages/Home')),
    Nosotros: lazy(()=> import('../pages/Nosotros')),
    Products: lazy(()=> import('../pages/Products')),
    Producto: lazy(()=> import('../pages/Producto')),
    Ubicanos: lazy(()=> import('../pages/Ubicanos')),
    Login: lazy(()=> import('../pages/Autenticacion/Login')),
    Register: lazy(()=> import('../pages/Autenticacion/Register')),
    CarritoPage: lazy(()=> import('../pages/Compras/CarritoPage')) ,
    ConfirmacionCompra: lazy(()=> import('../pages/Compras/ConfirmacionCompra')) ,
    PedidosUsuario: lazy(()=> import('../pages/PedidosUsuario')),
    RecuperacionPass:  lazy(()=> import('../pages/Autenticacion/RecuperacionPass')) ,
    CambioPass: lazy(()=> import('../pages/Autenticacion/CambioPass')) ,
    Error404: lazy(()=> import('../pages/Error404')),
}

export const Paths = {
    Home: '/',
    Nosotros: '/Nosotros',
    Products: '/Products',
    Ubicanos: '/Ubicanos',
    Login: '/Login',
    Register: '/Register',
    RecuperacionPass: '/RecuperarContraseña',
    CarritoPage: '/Carrito',
    ConfirmacionCompra: '/Pedido',
    PedidosUsuario: '/MisPedidos',
    Error404: '/Error'
}