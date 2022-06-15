/* Ejemplo de componente de clase con metodos de ciclo de vida*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LifeCicleExample extends Component {

    constructor(props){
        super(props) 
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }
    
    componentWillMount() {
        console.log('WillMount: Antes del montaje del componente')
    }
    
    componentDidMount(){
        console.log('DidMount: Despues del montaje del componente, Antes de renderizarlo')
    }

    componentWillReceivedProps(nextProps) {
        console.log('WillReceivedProps: Si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState) {
        //return true / false (sirve para controlar si el componente debe o no actualizarse)
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: Justo antes de actualizarse')

    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate: Justo despues de actualizarse')
        
    }

    componentWillUnmount(){
        console.log('WillUnmount: Justo antes de desaparecer')
    }

    render() {
        return (
            <div>

            </div>
        )
    }
};

LifeCicleExample.PropTypes = {

}