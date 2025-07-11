import { lazy } from "react"


export const Elements = {
    Home: lazy(()=> import('../pages/Home')),
    Nosotros: lazy(()=> import('../pages/Nosotros')),
    Products: lazy(()=> import('../pages/Products')),
    Ubicanos: lazy(()=> import('../pages/Ubicanos')),
    Login: lazy(()=> import('../pages/Login'))
}

export const Paths = {
    Home: '/',
    Nosotros: '/Nosotros',
    Products: '/Products',
    Ubicanos: '/Ubicanos',
    Login: '/Login'
}