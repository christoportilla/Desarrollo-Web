import { useState } from 'react'
import './App.css'
import Nosotros from './components/nosotros/Nosotros'

function App() {
  const [numero, setNumero] = useState<number>(0)
  const [numero2, setNumero2] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)

  return (
    <>
      <h1 className='ejemplo'>Variable 1</h1>
      <h2>Primer número: {numero}</h2>
      <button onClick={() => {setNumero(prev => prev + 1)}}>Sumar 1</button>
      <button onClick={() => {setNumero(prev => prev - 1)}}>Restar 1</button>
      <hr />

      <h1 className='ejemplo'>Variable 2</h1>
      <h2>Segundo número: {numero2}</h2>
      <button onClick={() => {setNumero2(prev => prev + 1)}}>Sumar 1</button>
      <button onClick={() => {setNumero2(prev => prev - 1)}}>Restar 1</button>
      <hr />

      <h1 className='ejemplo'>Operación</h1>
      <h2>Resultado de operación: {total}</h2>
      <button onClick={() => {setTotal(numero * numero2)}}>Producto</button>
      <button onClick={() => {setTotal(numero / numero2)}}>División</button>
      <hr />

      <Nosotros 
        title='Primera noticia'
        strong={true}
        text='Este es el texto de la primera noticia'
        btnText='Dame click'
      />

      <Nosotros
        text='Esta es la segunda noticia'
        btnText='Click'
      />
    </>
  )
}

export default App
