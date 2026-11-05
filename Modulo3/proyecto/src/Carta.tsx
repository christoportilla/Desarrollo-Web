import { useState } from "react"
import Plato from "./components/plato/Plato"

const Carta = () => {
    const [platos] = useState([
        {nombre: "Ají de gallina", precio: 20, categoria: "Arequipeño", picante: true},
        {nombre: "Caldo blanco", precio: 15},
        {nombre: "Rocoto relleno", precio: 30, categoria: "Tradicional", picante: true}
    ])

    return (
        <>
            <h1 className="titulo">Nuestra carta</h1>
            <hr />
            {
                platos.map(plato => (
                    <Plato 
                        key={plato.nombre} 
                        nombre={plato.nombre} 
                        precio={plato.precio} 
                        categoria={plato.categoria} 
                        picante={plato.picante}
                    />))
            }

        </>
    )
}
export default Carta