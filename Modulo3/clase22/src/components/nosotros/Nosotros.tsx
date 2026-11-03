// Siempre deben devolver un html
// Lo  siguiente es propio de typescript

import type { FC } from "react"

// Un valor que tenga signo de interrogación "title?", implica que es opcional, no está obligado a recibir ese valor
interface NosotrosProps {
    title?: string
    text: string
    btnText: string
    strong?: boolean
}

const Nosotros: FC<NosotrosProps> = ({ title = "Noticia", text, btnText, strong = false }) => {
    return (
        <div>
            <h1>{ title }</h1>
            {
                strong == true ? <p><b>{text}</b></p> : <p>{text}</p>
            }
            <hr />
            <button>{ btnText }</button>
        </div>
    )
}

export default Nosotros