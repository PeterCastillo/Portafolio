import ReactDOM from 'react-dom/client'
import App from './App'
import { Route } from "react-router"
import { BrowserRouter , Routes } from "react-router-dom"
import 'normalize.css'
import Home from './pages/Home'
import Educacion from './pages/Educacion'
import Contacto from './pages/Contacto'
import Proyects from './pages/Proyects'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<Home/>}/>
                <Route path='Educacion' element={<Educacion/>}/>
                <Route path='Proyectos' element={<Proyects/>}/>
                <Route path='Contacto' element={<Contacto/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
)
