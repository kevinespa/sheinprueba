import React from 'react'

function Inputmensaje({mensaje}) {
  return (
    <div>
      <input type="text" className='campotxt' value={mensaje} placeholder='Escribe aqui tu mensaje'/>
      <button>Enviar →</button>
    </div>
  )
}

export default Inputmensaje
