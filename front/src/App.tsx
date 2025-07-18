import AppRoutes from "./router/AppRoutes"
import './App.css'
import { Toaster } from "sonner"
import { UsuarioProvider } from "./shared/contexts/UsuarioContext"

const App = () => {
  return (
    <UsuarioProvider>
        <Toaster position="bottom-right" richColors />
        <AppRoutes />
    </UsuarioProvider>
  )
}

export default App