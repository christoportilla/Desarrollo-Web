import { useState } from "react"
import Fruta from "./components/fruta/fruta"

const Lista = () => {
    const [lista] = useState(["Manzana", "Pera", "Sandía"])

    return (
        <>
            <h1>Hola</h1>
            {
                lista.map(fruta => <Fruta key={fruta} title={fruta} boton={fruta}/>)
            }
        </>
    )
}

export default Lista