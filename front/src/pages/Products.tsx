import { useEffect, useState } from "react"
import Api from "../shared/hooks/Api"
import type { Productos } from "../declarations/apiVar"
import CardsProducts from "../shared/components/CardsProducts"


const Products = () => {
  const {ListProductos} = Api()
  const [productos, setProductos] = useState<Array<Productos>>()

  const getInfo = async() => {
    const data = await ListProductos()
    setProductos(data)
  }
  useEffect(()=>{
    getInfo()
  },[])
  return (
    <div className="flex justify-around flex-wrap gap-5 mt-5">
      {productos?.map(producto => (
        <CardsProducts producto={producto} key={producto.id} />
      ))}
    </div>
  )
}

export default Products