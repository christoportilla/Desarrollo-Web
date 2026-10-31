import { useState } from "react"
import Nosotros from "./Nosotros"
import './app.css'

function App() {
  // nombre es la variable que useState crea
  // setNombre es la acción que permitirá cambiar la variable
  // por estandar la acción toma el nombre de set + la variable
  const [numero, setNumero] = useState<number>(0)
  const [numero2, setNumero2] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)
  return (
    <>
      <h1 className="ejemplo">Soy el mejor de todos</h1>
      <h2>Primer número: {numero}</h2>
      <button onClick={() => { setNumero(prev => prev + 1)}}>Sumar 1</button>
      <button onClick={() => { setNumero(prev => prev - 1)}}>Restar 1</button>
      <button onClick={() => { setNumero(prev => prev * prev)}}>Multiplicar</button>
      <button onClick={() => { setNumero(prev => prev ** 0.5)}}>Raiz cuadrada</button>
      <button onClick={() => { setNumero(prev => prev ** 0.5)}}>Raiz cuadrada</button>

      <hr />
      <h2>Primer número: {numero2}</h2>
      <button onClick={() => { setNumero2(prev => prev + 1)}}>Sumar 1</button>
      <button onClick={() => { setNumero2(prev => prev - 1)}}>Restar 1</button>
      <button onClick={() => { setNumero2(prev => prev * prev)}}>Multiplicar</button>
      <button onClick={() => { setNumero2(prev => prev ** 0.5)}}>Raiz cuadrada</button>
      <button onClick={() => { setNumero2(prev => prev ** 0.5)}}>Raiz cuadrada</button>

      <hr />
      <h2>Total: {total}</h2>
      <button onClick={() => { setTotal(numero + numero2) }}>Suma</button>
      {/* <Nosotros/> */}
    </>
  )
}

export default App
