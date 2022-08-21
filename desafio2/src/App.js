import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Input from './components/Input'
import Boton from './components/Boton'
import { useState } from 'react'

const App = () => {
  const [nombre, setNombre] = useState("");
  const [pw , setPw] = useState("");
  const clickButton = pw === "252525";
  



  return (
    <div className='App'>
      <section className='card'>
      <div>
        <h1>Estados y Componentes</h1>
      </div>
      <form >
      <div>
      <Input
       nombre={nombre} setNombre={setNombre} pw={pw} setPw={setPw}
       />
      </div>
      <Boton clickButton={clickButton} />
      </form>
      </section>
      
      </div>
  )
}

export default App