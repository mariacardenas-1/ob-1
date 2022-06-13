import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TaskListComponent from './components/container/taskList'
import ComponenteA from './components/tarea/componenteA'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<TaskListComponent></TaskListComponent>*/}
        <ComponenteA />
      </header>
    </div>
  )
}

export default App
