import { Document, Page, Text, StyleSheet, View } from '@react-pdf/renderer'
import type { CartItem } from '../../shared/store/CarritoStore'

// Estilos
const estilos = StyleSheet.create({
  pagina: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  cabecera: {
    marginBottom: 20,
  },
  seccion: {
    marginBottom: 10,
  },
  titulo: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  filaTabla: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 5,
  },
  celda: {
    flex: 1,
    paddingHorizontal: 4,
  },
  celdaHeader: {
    fontWeight: 'bold',
  },
  total: {
    marginTop: 10,
    textAlign: 'right',
    fontSize: 14,
    fontWeight: 'bold',
  }
})

// Props adicionales
type Props = {
  items: CartItem[]
  datosCliente: {
    nombre: string
    apellido: string
    direccion: string
    modalidad: string
    telefono: string
    documento: string
    ciudad: string
    distrito: string
  }
}

const CompraPDF = ({ items, datosCliente }: Props) => {
  const totalCompra = items.reduce((acc, item) => acc + (item.cantidad * item.producto.precio), 0)
  const fechaActual = new Date().toLocaleDateString()

  return (
    <Document>
      <Page size="A4" style={estilos.pagina}>
        <Text style={estilos.titulo}>Boleta de Compra</Text>

        <View style={estilos.cabecera}>
          <Text>Nombre: {datosCliente.nombre} {datosCliente.apellido}</Text>
          <Text>Dirección: {datosCliente.direccion}</Text>
          <Text>Ciudad: {datosCliente.ciudad}</Text>
          <Text>Distrito: {datosCliente.distrito}</Text>
          <Text>Modalidad de entrega: {datosCliente.modalidad}</Text>
          <Text>Teléfono: {datosCliente.telefono}</Text>
          <Text>DNI o RUC: {datosCliente.documento}</Text>
          <Text>Fecha: {fechaActual}</Text>
        </View>

        <View>
          {/* Cabecera de tabla */}
          <View style={estilos.filaTabla}>
            <Text style={[estilos.celda, estilos.celdaHeader]}>Producto</Text>
            <Text style={[estilos.celda, estilos.celdaHeader]}>Cantidad</Text>
            <Text style={[estilos.celda, estilos.celdaHeader]}>Precio U.</Text>
            <Text style={[estilos.celda, estilos.celdaHeader]}>Subtotal</Text>
          </View>

          {/* Productos */}
          {items.map((item, index) => (
            <View key={index} style={estilos.filaTabla}>
              <Text style={estilos.celda}>{item.producto.nombre}</Text>
              <Text style={estilos.celda}>{item.cantidad}</Text>
              <Text style={estilos.celda}>S/ {item.producto.precio.toFixed(2)}</Text>
              <Text style={estilos.celda}>S/ {(item.cantidad * item.producto.precio).toFixed(2)}</Text>
            </View>
          ))}
        </View>

        <Text style={estilos.total}>Total: S/ {totalCompra.toFixed(2)}</Text>
      </Page>
    </Document>
  )
}

export default CompraPDF
