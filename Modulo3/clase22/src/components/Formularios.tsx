import { useRef, useState, type SyntheticEvent } from "react"

interface Datos {
    nombre: string
    correo: string
    password: string
}

const Formularios = () => {

    // Formulario 2
    // const inputRef = useRef<HTMLInputElement>(null)

    // const verBusqueda = () => {
    //     console.log(inputRef.current?.value)
    // }

    // Formulario 1    
    // const [nombre, setNombre] = useState<string>()
    // const [correo, setCorreo] = useState<string>()
    // const [password, setPassword] = useState<string>()
    
    // Caso 1
    // const obtenerDatos = (e: SyntheticEvent<HTMLFormElement>) => {
    //     e.preventDefault()

    //     const formData = new FormData(e.currentTarget)

    //     setNombre(formData.get('nombre') as string)
    //     setCorreo(formData.get('correo') as string)
    //     setPassword(formData.get('password') as string)

    //     console.log(nombre, correo, password)

    // Caso 2
    const obtenerDatos = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData) as unknown as Datos

        console.log(data.correo)
    } 

    return (
        // Formulario 1
        <form onSubmit={obtenerDatos}>
            <div>
                <label htmlFor="">Nombre</label>
                <input name='nombre' type="text" />
            </div>
            <div>
                <label htmlFor="">Correo</label>
                <input name='correo' type="text" />
            </div>
            <div>
                <label htmlFor="">Contraseña</label>
                <input name='password' type="text" />
            </div>

            <button type='submit'>Ver valores</button>
        </form> 

        // Formulario 2
        // <form>
        //     <input type="text" ref={inputRef}/>
        //     <button type="button" onClick={verBusqueda}>Buscar</button>
        // </form>
    )
}

export default Formularios