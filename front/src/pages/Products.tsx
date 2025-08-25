import { useEffect, useState } from "react"
import Api from "../shared/hooks/Api"
import type { Productos } from "../declarations/apiVar"
import CardsProducts from "../shared/components/CardsProducts"
import banner from '../assets/banner productos.jpg'
import itemHombres from '../assets/productos hombre.jpg'
import itemMujeres from '../assets/productos mujer.jpg'
import itemKids from '../assets/productos niños.jpg'
import {FadeLoader}  from 'react-spinners'

const Products = () => {
  const { ListProductos } = Api()
  const [productos, setProductos] = useState<Array<Productos>>([])
  const [productosFiltrados, setProductosFiltrados] = useState<Array<Productos>>([])
  const [loading, setLoading] = useState(true)

  const [filtroCategoria, setFiltroCategoria] = useState<string[]>([])
  const [filtroTalla, setFiltroTalla] = useState<string[]>([])

  const getInfo = async () => {
    setLoading(true)
    const data = await ListProductos()
    console.log(data)
    setProductos(data)
    setProductosFiltrados(data)
    setLoading(false)
  }
  

  
  const handleCategoriaChange = (categoria: string) => {
    setFiltroCategoria(prev =>
      prev.includes(categoria)
      ? prev.filter(c => c !== categoria)
      : [...prev, categoria]
    )
  }
  
  const handleTallaChange = (talla: string) => {
    setFiltroTalla(prev =>
      prev.includes(talla)
      ? prev.filter(t => t !== talla)
      : [...prev, talla]
    )
  }

  const filtrarProductos = () => {
    let filtrados = [...productos]
    
    if (filtroCategoria.length > 0) {
      filtrados = filtrados.filter(p => filtroCategoria.includes(p.categoria.descripcion))
    }
    
    if (filtroTalla.length > 0) {
      filtrados = filtrados.filter(p => filtroTalla.includes(p.talla.descripcion))
    }
    
    setProductosFiltrados(filtrados)
  }

  useEffect(()=>{
    getInfo()
  },[])

  useEffect(() => {
    filtrarProductos()
  }, [filtroCategoria, filtroTalla])
  
  return (
    <>
      <section className="w-full pt-16">
        <img src={banner} />
      </section>

      <section>
        <div className="flex gap-5 max-md:px-[30px]">
          <div className="flex flex-col items-center">
            <img src={itemMujeres} className="md:size-[300px] size-[200px] rounded-[50%] border-1 object-center" />
            <p>Mujer</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={itemHombres} className="md:size-[300px] size-[200px] rounded-[50%] border-1" />
            <p>Hombre</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={itemKids} className="md:size-[300px] size-[200px] rounded-[50%] border-1" />
            <p>Niños</p>
          </div>
        </div>
      </section>

      <section className="w-full pb-5">
        <div className="md:flex max-md:flex max-md:flex-col md:justify-evenly justify-center max-md:items-center gap-6">
          {/* Filtros */}
          <div className="w-[200px] h-[fit-content] border-1 p-2">
            <p className="font-bold mb-2">Filtros:</p>

            <div className="mb-4">
              <p className="font-semibold">Categoría:</p>
              {["polos", "pantalones", "casacas", "camisas"].map(cat => (
                <div key={cat}>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filtroCategoria.includes(cat)}
                      onChange={() => handleCategoriaChange(cat)}
                    />
                    {cat}
                  </label>
                </div>
              ))}
            </div>

            <div>
              <p className="font-semibold">Tallas:</p>
              {["S", "M", "L", "XL"].map(talla => (
                <div key={talla}>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filtroTalla.includes(talla)}
                      onChange={() => handleTallaChange(talla)}
                    />
                    {talla}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Productos */}
          <div className="flex">
            {loading? <FadeLoader /> : productosFiltrados.length === 0 ? (
              <p>No se encontraron productos con los filtros seleccionados.</p>
            ) : (
              <div className="grid md:grid-cols-3 gap-4">
                {productosFiltrados.map(producto => (
                  <CardsProducts producto={producto} key={producto.id} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
