import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from './contacto';


const ComponenteB = ({contacto: {nombre, apellido, email, conectado }}) => {
    return (
        <div>
            <h4>
                contacto: {nombre} {apellido} {email} esta {conectado ? 'en linea':'no disponible'}
            </h4>
        </div>
    );
};


ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponenteB;
