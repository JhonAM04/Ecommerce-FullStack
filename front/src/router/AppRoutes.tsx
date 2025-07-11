import { Route, Routes } from "react-router-dom"
import { Elements, Paths } from "./Routes"
import BaseOutlet from "./Outlets/BaseOutlet"

const AppRoutes = () => {
  return (
    <Routes>
        <Route path={Paths.Login} element={<Elements.Login/>} />

        <Route element={<BaseOutlet/>}>
            <Route path={Paths.Home} element={<Elements.Home/>} />
            <Route path={Paths.Nosotros} element={<Elements.Nosotros/>} />
            <Route path={Paths.Products} element={<Elements.Products/>} />
            <Route path={Paths.Ubicanos} element={<Elements.Ubicanos/>} />
        </Route>
    </Routes>
  )
}

export default AppRoutes