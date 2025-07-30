

const Ubicanos = () => {
  return (
    <section className="pt-16 w-full">
      <h1 className="text-center font-bold text-3xl mb-[20px]">Localizar Tiendas</h1>
      <div className="md:flex max-md:flex max-md:flex-col justify-center items-center gap-2">
        <div className="flex flex-col bg-[#FFE6BD] p-5 md:h-[600px] gap-2">
          <h3 className="font-bold">Encuentra tu tienda mas cercana</h3>
          <form>
            <input type="text" className="border-1 bg-white p-2 rounded-[10px]" placeholder="Escribe una ciudad" />
          </form>

          <div className="border-y-1">
            <h2 className="text-center font-bold">ECLAT BOUTIQUE COMAS</h2>
            <p className="max-w-[280px]">Av. Los pinos, Mercado El pinar Puesto 01, Perú, Lima, Comas</p>
            <p className="text-green-800">Abierto</p>
          </div>

        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15615.233928394071!2d-77.04518685!3d-11.918412799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1753833390719!5m2!1ses-419!2spe" className="md:w-[800px] max-md:size-[350px]  h-[600px]" loading="lazy" ></iframe>

      </div>

    </section>
  )
}

export default Ubicanos