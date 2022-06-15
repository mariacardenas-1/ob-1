import React, { useEffect, useState } from "react";

const Clock = () => {
    
    const initialState = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Mafe',
        apellidos: 'Cardenas'
    };

    const [state, setState] = useState(initialState);

    const tick = () => {
        console.log('tick')
        setState((prevState) => {
            let edad = prevState.edad +1;
            return {
               ...prevState,
               fecha: new Date(),
               edad
            }
         });
      }

    useEffect(() => {
        console.log('useEffect')
       const timerID = setInterval(() => {
        console.log('setInterval')
            tick()
        }, 1000)

       return() => clearInterval(timerID)
    }, []);

    return (
        <div>
            <h2>
            Hora Actual:
            {state.fecha.toLocaleTimeString()}
            </h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {state.edad}</h1>
        </div>
    );
}

export default Clock;
