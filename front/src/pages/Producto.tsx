import { useNavigate, useParams } from "react-router-dom"
import Api from "../shared/hooks/Api"
import { useEffect, useState } from "react"
import type { Productos } from "../declarations/apiVar"
import bcp from '../assets/bcp.png'
import interbank from '../assets/interbank.png'
import visa from '../assets/visa.png'
import plin from '../assets/PLIN.png'
import yape from '../assets/yape.jpg'
import { CarritoStore } from "../shared/store/CarritoStore"
import { Paths } from "../router/Routes"
import {FadeLoader}  from 'react-spinners'

const Producto = () => {
    const {id} = useParams()
    const Navigate = useNavigate()
    const {GetProduct} = Api()
    const {agregar} = CarritoStore()
    const [producto, setProducto] = useState<Productos>()
    const [loading, setLoading] = useState(true)


    const LoadData = async() => {
        setLoading(true)
        const data = await GetProduct(Number(id))
        setProducto(data)
        setLoading(false)
    }

    useEffect(()=>{
        LoadData()
    },[])

  
  return (
    <>
       <section className="w-full pt-16">
        <div className="md:flex max-md:px-[20px] max-md:pb-[20px] justify-evenly items-center">
            {
                loading? <FadeLoader /> : <img src={producto?.imagen} className="w-[500px]" />
            }
            <div className="flex flex-col gap-2">
                <h3 className="font-bold text-xl text-gray-300">ECLAT BOUTIQUE</h3>
                <h2 className="font-bold text-xl">{producto?.nombre}</h2>
                <p>S/. {producto?.precio}</p>
                <h4>Talla</h4>
                <p className="border-1 w-fit p-1 bg-[#F8C264] font-bold">{producto?.talla}</p>
                <div className="flex items-center justify-between">
                    <p>Prueba Cantidad</p>
                    <button onClick={()=> agregar(producto!)} className="border-1 p-2">Agregar al carrito</button>
                </div>
                <button onClick={()=> {agregar(producto!); Navigate(Paths.CarritoPage)}} className="border-1 py-2 bg-[#F8C264] font-bold">Comprar ahora</button>
                
                <h4>Metodos de pago</h4>
                <li>Aceptamos todo tipo de tarjetas de Credito/debito y mas</li>

                <div className="flex flex-wrap gap-4">
                    <img src={visa} className="size-[65px] border-1 rounded-[10px]" />
                    <img src={bcp} className="size-[65px] border-1 rounded-[10px]" />
                    <img src={yape} className="size-[65px] border-1 rounded-[10px]" />
                    <img src={interbank} className="size-[65px] border-1 rounded-[10px]" />
                    <img src={plin} className="size-[65px] border-1 rounded-[10px]" />
                </div>

            </div>
        </div>
       </section>
    </>
  )
}

export default Producto