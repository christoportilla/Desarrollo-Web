import { useState } from "react"
import type { FC } from "react"
import './plato.css'

interface PlatoProps {
    nombre: string
    categoria?: string
    precio: number
    picante?: boolean
}

const Plato: FC<PlatoProps> = ({nombre, categoria='Plato de fondo', precio, picante = false}) => {
    const [cantidad, setCantidad] = useState<number>(0)
    
    return (
        <div>
            <h2 className="nombre">{nombre}</h2>
            <p>Categoría: {categoria}</p>
            <p>Precio: S/ {precio}</p>
            {
                picante ? <p><b>Picante</b></p> : <p>Suave</p>
            }
            <p>Cantidad: {cantidad}</p>
            <button onClick={() => {setCantidad(prev => prev + 1)}}>{cantidad == 0 ? "Agregar" : "+"}</button>
            <button onClick={() => {setCantidad(prev => prev > 0 ? prev - 1 : 0)}}>-</button>
            <p className="total">Subtotal: S/ {precio * cantidad}</p>
            <hr />
        </div> 
    )
}

export default Plato