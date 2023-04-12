import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Intro from "./components/Intro"
import Experiencia from "./components/Experiencia"
import Estudios from "./components/Estudios"
import Habilidades from "./components/Habilidades"
import Proyectos from "./components/Proyectos"

function App() {
  return (
    <div>
      <NavBar/>
      <Intro/>
      <Experiencia/>
      <Estudios/>
      <Habilidades/>
      <Proyectos/>
      <Footer/>
    </div>
  )
}

export default App
