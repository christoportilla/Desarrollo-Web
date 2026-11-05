import type { FC } from "react"
import './fruta.css'

interface FrutaProps {
    title: string
    boton: string
}

const Fruta: FC<FrutaProps> = ({title, boton}) => {
    return (
        <div>
            <h3 className="fruta">{title}</h3>
            <p>Esta fruta es muy saludable</p>
            <button>Ver {boton}</button>
        </div>
    )
}

export default Fruta