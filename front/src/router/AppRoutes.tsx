import { Route, Routes } from "react-router-dom"
import { Elements, Paths } from "./Routes"
import BaseOutlet from "./Outlets/BaseOutlet"

const AppRoutes = () => {
  return (
    <Routes>
        <Route path={Paths.Login} element={<Elements.Login/>} />
        <Route path={Paths.Register} element={<Elements.Register/>} />

        <Route element={<BaseOutlet/>}>
            <Route path={Paths.Home} element={<Elements.Home/>} />
            <Route path={Paths.Nosotros} element={<Elements.Nosotros/>} />

            <Route path={Paths.Products}>
              <Route index element={<Elements.Products/>} />
              <Route path="Product/:id" element={<Elements.Producto/>} />
            </Route>
            
            <Route path={Paths.Ubicanos} element={<Elements.Ubicanos/>} />
        </Route>
        <Route path="*" element={<Elements.Error404/>} />
    </Routes>
  )
}

export default AppRoutes