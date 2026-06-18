import React from 'react'
import Ropa from '../assets/ropa.png'
import '../Card.css'

function Card({nombreP, precio, ropa}) {

 let iva = precio*1.19

  return (
    <div className='cardinner'>
      <img className='imagendeproducto' src={ropa}  alt="" />
      <div>{nombreP}</div>
      <div>precio con iva:{iva}</div>
      <div>{precio > 20000 ? 'esta caro' : 'esta bien'} precio sin iva:{precio}</div>
    </div>
  )
}

export default Card

