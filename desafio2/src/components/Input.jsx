import React  from 'react'


const Input = ({nombre, setNombre, pw , setPw}) => {
  return (
    <>
     <label>
       <p className='text'><strong>Nombre:</strong></p>
       <br />
       <input  className='input' type="text" placeholder='Ingresa Nombre' value={nombre} onChange={(e)  => setNombre(e.target.value)} />
     </label>
     <br />
     <label>
       <p className='text'><strong>Contraseña</strong></p>
       <br />
       <input  className='input' type="text" placeholder='Ingresa Contraseña' value={pw} onChange={(e)  => setPw(e.target.value)} />
     </label>
    </>
  )
}

export default Input;