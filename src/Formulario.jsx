import React from 'react'
import "./FormularioEstilo.css"
import { useState } from "react"
import Card from './Card'

const Formulario =() => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [textoValidacion, setTextoValidacion] = useState("");
    const [card, setCard] = useState(false);
    function validacionFormulario(e) {
    e.preventDefault();
    // const nombre = e.target[0].value;
    // const apellido = e.target[1].value;
    if (nombre.length < 3 || nombre[0] == " " || apellido.length < 6) {
        setTextoValidacion("Por favor chequea que la información sea correcta");
    } else {
        setTextoValidacion("");
        setCard (true);
    }
    }

    return (
    <div className="App">
        <h1>Escribe tus datos:</h1>
        <form id = "formulario" onSubmit={validacionFormulario}>
        <label>
            Nombre:
            <input type="text" name="nombre" placeholder="ingrese nombre" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
        </label>
        <label>
            Apellido:
            <input type="text" name="apellido" placeholder="ingrese apellido" onChange={(e) => setApellido(e.target.value)}  value={apellido}/>
        </label>
        <input type="submit" value="Enviar" form = "formulario"  />
        </form>
        <span>{textoValidacion}</span>    
        {
            card && (<Card name={nombre} apellido={apellido}/>)
        }
    </div>
    );
}
export default Formulario;