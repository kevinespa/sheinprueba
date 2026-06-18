import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Contentmessage from './components/Contentmessage'
import ListaUsuarios from '/components/ListaUsuarios.jsx'



function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("white")
  const [colorText, setColorText] = useState("black")
  const [nombre, setNombre] = useState("")
  const [productos, setProductos] = useState("")
  const [cargador, setCargador] = useState(true)

  useEffect(() => {
    console.log("cambio el contador"+count)
    document.title = nombre
  }, [nombre])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json()
      .then((data) => {
        setProductos(data)
        setCargador(false)
        console.log(data)
      }
        )
    )
  
    
  }, [ ])
  
  
  

  const catalogoRopa = [
    {
      id: 101,
      prenda: "Chaqueta de Cuero",
      precio: 120,
      imagen: "https://images.unsplash.com",
      disponible: true,
      enOferta: true,
      tallas: ["M", "L", "XL"]
    },
    {
      id: 102,
      prenda: "Sudadera Minimalista",
      precio: 45,
      imagen: "https://images.unsplash.com",
      disponible: false,
      enOferta: false,
      tallas: ["S", "M"]
    },
    {
      id: 103,
      prenda: "Botas de Montaña",
      precio: 85,
      imagen: "https://images.unsplash.com",
      disponible: true,
      enOferta: false,
      tallas: ["38", "40", "42"]
    },
    {
      id: 104,
      prenda: "Gorra Urbana",
      precio: 25,
      imagen: "https://images.unsplash.com",
      disponible: true,
      enOferta: true,
      tallas: ["Única"]
    }
  ];
  
  if(cargador){
    return(
        <h1>Cargando productos</h1>
    ) 
  } else{

  return (
    <>
      
     
      {/* <Card nombreP="Pantalon" precio={25000}/>
      <Card nombreP="Camisa" precio={15000}/> */}
     {/*  {productos.map((p)=>(
        <Card key={p.id} nombreP={p.title} precio={p.price} ropa={p.image}/>
      ))} */}
      
      
      
      <Contentmessage/>
     
      <ListaUsuarios/>
      
    </>
  )
}
}

export default App
