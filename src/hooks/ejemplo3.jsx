/* ejemplo del uso de:
useState
useContext */

import React, { useState, useContext } from 'react';

const miContexto = React.createContext(null)

const Componente1 = () => {
    
    const state = useContext(miContexto)

    return (
        <div>
             <h1>
                El Token es: {state.token}
            </h1>
            <Componente2 />
        </div>
    );
}


const Componente2 = () => {

     const state = useContext(miContexto)

    return (
        <div>
           <h2>
            La sesión es: {state.sesion}
           </h2>
        </div>
    );
}

export default function MiComponenteConContexto() {

    const initialState = {
        token: '1234557',
        sesion: 1
    }

    const [sessionData, setSessionData] = useState(initialState)

    function actualizarSesion(){
        setSessionData(
            {
                token:'JWT123456789',
                sesion: sessionData.sesion + 1
            }
        )
    }

  return (
    <miContexto.Provider value={sessionData}>
        <h1>****Ejemplo de useState() y useConntext()****</h1>
        <Componente1 />
        <button onClick={actualizarSesion}>Actualizar Sesión</button>
    </miContexto.Provider>
  )
}



