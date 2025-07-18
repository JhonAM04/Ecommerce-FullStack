import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { Paths } from "../../router/Routes"
import type { Perfil } from "../../declarations/apiVar"


type UsuarioContexto = {
    perfil: Perfil | null
    Login: (user: string, pass: string) => Promise<void>
    LogOut: () => void
}


export const UsuarioContext = createContext<UsuarioContexto | undefined>(undefined)

export const UsuarioProvider = ({children}:{children:ReactNode}) => {

    const URL = 'http://127.0.0.1:8000/api/ecommerce/'
    const navigate = useNavigate()
    const [perfil, setPerfil] = useState<Perfil | null>(null)

    const Login = async(user:string, pass:string) => {
        const bd = await fetch(`${URL}login`, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                username: user,
                password: pass
            })
        })

        const data = await bd.json().then((data)=>{
            if(data.detail == 'No active account found with the given credentials'){
                toast.error('Credenciales incorrectas')
                return
            }else{
                toast.success('Inicio de sesion Exitoso')
                localStorage.setItem('session',JSON.stringify(data))
                GetPerfil(data.access)
                navigate(Paths.Home)
            }
        })
        return data
    }

    const GetPerfil = async(token:string) => {
        const bd = await fetch(`${URL}profile`,{
            method: 'GET',
            headers: {'Content-Type':'application/json',
                      'Authorization': `Bearer ${token}`
            }
        })
        const data = await bd.json()
        setPerfil(data)
    }

    const LogOut = () => {
        localStorage.removeItem('session')
        setPerfil(null)
        navigate(Paths.Login)
        toast.success('Cerraste sesion con exito')
    }

    const PreLoadData = () => {
        const session = JSON.parse(localStorage.getItem('session')!)
        if(session){
            GetPerfil(session.access)
        }
    }

    useEffect(()=>{
        PreLoadData()
    },[])



    return(
        <UsuarioContext.Provider value={{perfil, Login, LogOut}}>
            {children}
        </UsuarioContext.Provider>
    )

}

export const useUser = (): UsuarioContexto => {
  const context = useContext(UsuarioContext)
  if (!context) {
    throw new Error("useUser debe usarse dentro de un <UsuarioProvider>")
  }
  return context
}