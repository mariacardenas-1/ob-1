/*Ejemplo de uso del metodo componentwillUnmount para componenete de calse
y hooks para componente funcional*/

import React, { Component, useEffect } from 'react';

export class WillUnmount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca')
    }

    render() {
        return (
            <div>
                <h1>
                    WillUnmount
                </h1>
            </div>
        );
    }
}

export const WillUnmountHook = () => {

    useEffect(() => {
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca')
        };
    }, [input]);

    return (
        <div>
            <h1>
                WillUnmount
            </h1>
        </div>
    );
}

export default WillUnmount;
