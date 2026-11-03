import { useState } from "react"
import Fruta from "./components/fruta/fruta"

const Lista = () => {
    const [lista, setLista] = useState(["Manzana", "Pera", "Sandía"])

    return (
        <>
            <h1>Hola</h1>
            {
                lista.map(fruta => <Fruta title={fruta} boton={fruta}/>)
            }
        </>
    )
}

export default Lista