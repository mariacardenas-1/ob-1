import logo from './logo.svg'
import { useState } from 'react'
import './App.css'
import TaskListComponent from './components/container/taskList'
import ComponenteA from './components/tarea/componenteA'
import Ejemplo1 from './hooks/ejemplo1'
import Ejemplo2 from './hooks/ejemplo2'
import MiComponenteConContexto from './hooks/ejemplo3'
import Ejemplo4 from './hooks/ejemplo4'
import Clock from './components/tarea/tarea456'
import Greetingstyled from './components/pure/greetingStyled'
import Father from './components/container/father'
import ContactListComponent from '../src/components/tarea/tarea679.jsx/contactList'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <TaskListComponent></TaskListComponent>  */}
        {/* <ComponenteA /> */}
        {/* <Ejemplo1 /> */}
        {/* <Ejemplo2 /> */}
        {/* <MiComponenteConContexto /> */}
        {/* <Ejemplo4 nombre={'Mafe'}>
          <h3>
            Contenido del prop.children
          </h3>
        </Ejemplo4> */}
        {/* <Clock/> */}
        {/* <Greetingstyled name='Mafe'></Greetingstyled> */}
      {/* </header> */}
      {/* <Father></Father> */}
      <ContactListComponent></ContactListComponent>
    </div>
  )
}

export default App
