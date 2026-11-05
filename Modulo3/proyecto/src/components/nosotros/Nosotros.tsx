import type { FC } from "react"

interface NosotrosProps {
    title?: string
    text: string
    btnText: string
    strong?: boolean
}

const Nosotros: FC<NosotrosProps> = ({ title = "Noticia", text, btnText, strong = false }) => {
    return (
        <div>
            <h1>{title}</h1>
            {
                strong ? <p><b>{text}</b></p> : <p>{text}</p>
            }
            <hr />
            <button>{btnText}</button>
        </div>
    )
}

export default Nosotros