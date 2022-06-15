/* Ejemplo de uso de metodo componentDidUpdate en componente de clase
y uso de hook en componente funcional */

import React, { Component, useEffect } from 'react'

export class didUpdate extends Component {

    componentDidUpdate(){
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio su estado privado')
    }

  render() {
    return (
      <div>didUpdate</div>
    )
  }
}

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio su estado privado')        
    });

    return (
        <div>didUpdate</div>
    );
}
