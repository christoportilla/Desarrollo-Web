import { useState } from "react"
import Nosotros from "./Nosotros"
import './app.css'

function App() {
  const [nombre, setNombre] = useState<string>("Christopher")
  return (
    <>
      <h1 className="ejemplo">Soy el mejor de todos</h1>
      <h2>Hola {nombre}</h2>
      <p>Hola</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, natus.</p>
      <Nosotros/>
    </>
  )
}

export default App
