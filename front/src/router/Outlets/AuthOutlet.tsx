import { Navigate, Outlet } from "react-router-dom"
import { Paths } from "../Routes"


const AuthOutlet = () => {
    const session = localStorage.getItem('session')
  return (
    session? <Navigate to={Paths.Home}/>:<Outlet />
  )
}

export default AuthOutlet