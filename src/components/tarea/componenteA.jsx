import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from './contacto';
import ComponenteB from './componenteB';


const ComponenteA = () => {
     const defaultContact = new Contacto('mafe', 'cardenas', 'hola', true)
    return (
        <div>
            <h4>
                componente a
            </h4>
            <ComponenteB contacto={defaultContact} />
        </div>
    );
};



export default ComponenteA;
