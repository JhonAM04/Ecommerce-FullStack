
import { toast } from "sonner"
import { Paths } from "../../router/Routes"
import { useNavigate } from "react-router-dom"


const Api = () => {

    const URL = 'http://127.0.0.1:8000/api/ecommerce/'
    const navigate = useNavigate()

    const ApiLogin = async(user:string, pass:string) => {
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
                navigate(Paths.Home)
            }
        })
        return data
    }

    const ListProductos = async() => {
        const bd = await fetch(`${URL}productos`)
        const data = await bd.json()
        return data
    }




  return {
    ApiLogin, ListProductos
  }
}

export default Api