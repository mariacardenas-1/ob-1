//uso de useState
import React, { useState } from 'react';

const Ejemplo1 = () => {

    const  valorInicial = 0;
    const personaInicial = {
        nombre: 'mafe',
        email: 'mafe@gmail.com'
    }

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    function incrementarContador(){
        setContador(contador + 1);
    } 

    function actualizarPersona(){
        setPersona(
           {
                nombre: 'cata',
                email: 'cata@gmail.com'
            }
        );
    }

    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>CONTADOR: { contador }</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: { persona.nombre }</h3>
            <h4>EMAIL: { persona.email }</h4>
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    );
}

export default Ejemplo1;
