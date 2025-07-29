
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
                console.log(data.access)
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

    const GetProduct = async(id:number) => {
        const bd = await fetch(`${URL}productos/${id}`)
        const data = await bd.json()
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
        return data
    }

    const ApiRegister = async(user:string, name: string, lastname: string, email:string,pass:string) => {
        const bd = await fetch(`${URL}register`,{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                username: user ,
                first_name: name ,
                last_name: lastname ,
                email: email,
                password: pass ,
            })
        })
        const data = await bd.json().then(data => {
            if(data.message == 'Usuario creado Exitosamente'){
                toast.success('Usuario Creado exitosamente')
                navigate(Paths.Login)
            }else{
                toast.error('UPS, parece que hubo un error!')
            }
        })
        return data
    }

    const RegistrarPedido = async(token:string, detalles:any[]) => {
        const bd = await fetch(`${URL}pedidosUsuario`,{
            method: 'POST',
            headers: {'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({detalles})
        })
        const data = await bd.json().then(data => {
            if(data.message == 'Pedido creado Exitosamente'){
                return true
            }else{
                return false
            }
        })
        return data
    }

    const ListarPedidosUsuario = async(token:string) => {
        const bd = await fetch(`${URL}pedidosUsuario`,{
            method: 'GET',
            headers: {'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await bd.json()
        return data
    }




  return {
    ApiLogin, ListProductos, GetPerfil, ApiRegister, GetProduct, RegistrarPedido, ListarPedidosUsuario
  }
}

export default Api