import React, {useState} from "react";

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState(0)
    const validar = (event) => {
        event.preventDefault()
        if (!edad.trim()) {
            console.log("El campo edad está vacio")
        }
        if (!nombre.trim()) {
            console.log("El campo nombre está vacio")

        }
        console.log("Botón presionado")


    }
    return (<div className='container mt-5 col-4'>
            <form action="" onSubmit={validar}>

                <input type="text" className='form-control mb-3' placeholder="Ingrese nombre" onChange={(e) => {
                    setNombre(e.target.value)
                }}/>
                <input type="text" className='form-control mb-3' placeholder="Ingrese edad"
                       onChange={(event => setEdad(event.target.value))}/>
                <input type="submit" value="Enviar" className="btn btn-primary"/>
            </form>

        </div>
    )
}
export default Formulario
