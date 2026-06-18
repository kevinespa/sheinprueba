import React from 'react'

function Burbujamensaje({mensaje, usuario, hora}) {

   

  return (
    
      <div className='burbuja'>
        <div className='user'>{usuario}</div>
        <div className='msj'>{mensaje}</div>
        <div className='hora'>{hora}</div>
      </div>
   
  )
}

export default Burbujamensaje
