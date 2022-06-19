import { useState } from 'react'
import './App.css'
import Form from './Components/Form'


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Form names="Login"/>
        <input inputMode='numeric'/>
      </header>
    </div>
  )
}

export default App
