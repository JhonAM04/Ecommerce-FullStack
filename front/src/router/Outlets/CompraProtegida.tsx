import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Paths } from '../Routes'

const CompraProtegida = () => {
    const location = useLocation()
    const acceso = location.state?.acceso
  return (
    acceso? <Outlet/> : <Navigate to={Paths.Home} />
  )
}

export default CompraProtegida