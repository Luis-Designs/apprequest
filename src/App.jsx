import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Form from './Components/Form'


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Form name="Login"/>
        <input inputMode='numeric'/>
      </header>
    </div>
  )
}

export default App
