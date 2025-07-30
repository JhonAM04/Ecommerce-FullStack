import { Navigate, Outlet } from "react-router-dom"
import { Paths } from "../Routes"


const UserOutlet = () => {
    const session = localStorage.getItem('session')
  return (
    session? <Outlet /> : <Navigate to={Paths.Home} />
  )
}

export default UserOutlet