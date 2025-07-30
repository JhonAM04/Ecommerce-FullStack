import { useEffect, useState } from "react"
import Api from "../shared/hooks/Api"
import type { PedidosUsuario } from "../declarations/apiVar"

const PedidosUsuario = () => {
    const session = JSON.parse(localStorage.getItem('session')!)
    const {ListarPedidosUsuario} = Api()
    const [pedidos, setPedidos] = useState<Array<PedidosUsuario>>()

    const loadData = async() =>{
        const data = await ListarPedidosUsuario(session.access)
        setPedidos(data)
    }

    useEffect(()=>{
        loadData()
    },[])
  return (
    <section className="pt-16 w-full h-screen flex flex-col justify-center items-center gap-2">
        <h1 className="font-bold text-2xl">Mis pedidos:</h1>
        {pedidos?.length == 0? <p>No se ha realizado ningun pedido hasta el momento :c</p>  : pedidos?.map(item => (
            <div className="flex justify-between border-1 md:w-[500px] max-md:w-[350px]" key={item.id}>
                <div className="flex flex-col">
                    <h2>Fecha de Compra</h2>
                    <p>{String(item.fecha)}</p>
                </div>
                <div className="flex flex-col items-center">
                    <h2>Total Pagado</h2>
                    <p>{item.total}</p>
                </div>
            </div>
        )) }
    </section>
  )
}

export default PedidosUsuario