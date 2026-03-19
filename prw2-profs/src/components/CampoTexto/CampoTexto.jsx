// import React from "react";
// import './CampoTexto.css';
// const CampoTexto = (props) => {
//     return (
//         <div className="campo-texto">
//             <label>{props.label}</label>
//             <input placeholder={props.placeholder}/>
//         </div>
//     )
// }
// export default CampoTexto;


// import React from "react";
// import './CampoTexto.css';
// const CampoTexto = (props) => {
//     const aoDigitado = (evento) => {
//         console.log(evento.target.value);
//     }
//     return (
//         <div className="campo-texto">
//             <label> {props.label} </label>
//             <input onChange={aoDigitado} placeholder={props.placeholder} />
//         </div>
//     )
// }
// export default CampoTexto;



// import React, { useState } from "react";
// import './CampoTexto.css';
// const CampoTexto = (props) => {
//     //const [valor, setValor] = useState('')
//     const aoDigitado = (evento) => {
//         setValor(evento.target.value)
//         console.log(valor)
//     }
//     return (
//         <div className="campo-texto">
//             <label> {props.label} </label>
//             <input
//                 value={valor}
//                 onChange={aoDigitado}
//                 placeholder={props.placeholder}
//             />
//         </div>
//     );
// }
// export default CampoTexto;



import React from "react";
import './CampoTexto.css';
const CampoTexto = (props) => {
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    return (
        <div className="campo-texto">
            <label> {props.label} </label>
            <input
                value={props.valor}
                onChange={aoDigitado}
                placeholder={props.placeholder}
            />
        </div>
    );
}

