import { lazy } from "react"


export const Elements = {
    Home: lazy(()=> import('../pages/Home')),
    Nosotros: lazy(()=> import('../pages/Nosotros')),
    Products: lazy(()=> import('../pages/Products')),
    Producto: lazy(()=> import('../pages/Producto')),
    Ubicanos: lazy(()=> import('../pages/Ubicanos')),
    Login: lazy(()=> import('../pages/Autenticacion/Login')),
    Register: lazy(()=> import('../pages/Autenticacion/Register')),
    Error404: lazy(()=> import('../pages/Error404')),
}

export const Paths = {
    Home: '/',
    Nosotros: '/Nosotros',
    Products: '/Products',
    Ubicanos: '/Ubicanos',
    Login: '/Login',
    Register: '/Register',
    Error404: '/Error'
}