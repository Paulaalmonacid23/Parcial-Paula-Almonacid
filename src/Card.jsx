import React from "react";
import "./CardEstilo.css"


function Card(props) {
    return (
    <div>
    <p>Hola {props.nombre}</p>
    <p>Tus datos son:</p>
    <p>{props.apellido}</p>
    </div>
    );
}
export default Card;