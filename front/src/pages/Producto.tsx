import { useParams } from "react-router-dom"
import Api from "../shared/hooks/Api"
import { useEffect, useState } from "react"
import type { Productos } from "../declarations/apiVar"

const Producto = () => {
    const {id} = useParams()
    const {GetProduct} = Api()
    const [producto, setProducto] = useState<Productos>()


    const LoadData = async() => {
        const data = await GetProduct(Number(id))
        setProducto(data)
    }

    useEffect(()=>{
        LoadData()
    },[])

  
  return (
    <>
        <div className="flex justify-center items-center w-full h-[80vh]">
            <img src={producto?.imagen} />
            <div className="flex flex-col">
                <h1 className="font-bold">{producto?.nombre}</h1>
                <p>Talla: {producto?.talla}</p>
                <p>Precio: S/{producto?.precio}</p>
                <button className="border-1 bg-green-400 hover:bg-green-700">Agregar a la bolsa</button>
            </div>
        </div>
    </>
  )
}

export default Producto