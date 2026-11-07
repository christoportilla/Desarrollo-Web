import { useState, type ChangeEvent } from "react"

const FormulariosControlados = () => {
    const [form, setForm] = useState({ nombre: "", edad: "", password: "", correo: ""})

    const cambiarValor = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value}))
    }

    return (
    <form action="">
        <input type="text" name='nombre' placeholder="Nombre" onChange={cambiarValor}/> <br />
        <input type="number" name='edad' placeholder="Edad" onChange={cambiarValor}/> <br />
        <input type="email" name='correo' placeholder="Correo" onChange={cambiarValor} /> <br />
        <input type="password" name='password' placeholder="Contraseña" onChange={cambiarValor}/>

        <button type="button" onClick={() => console.log(form)}>Mostrar</button>
    </form>    
  )
}

export default FormulariosControlados