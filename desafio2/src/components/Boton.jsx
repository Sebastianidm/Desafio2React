import React from 'react'

const Boton = ({clickButton }) => {
  const logrado = () => {
    alert("Desafio Completado")
  }
  
  return (
    <button className='boton' type='button' disabled = {!clickButton} onClick={logrado}> Ingresar </button>
  )
}

export default Boton