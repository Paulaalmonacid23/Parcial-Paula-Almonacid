import React from "react";
import "./CardEstilo.css"


function Card(props) {
    return (
    <div className="carta">
    <p>Hola, {props.nombre}</p>
    <p>tus datos son:</p>
    <p>{props.apellido}</p>
    </div>
    );
}
export default Card;