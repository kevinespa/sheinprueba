import { useEffect, useState } from 'react';
import Burbujamensaje from './Burbujamensaje'
import Inputmensaje from './Inputmensaje'
import { createClient} from '@supabase/supabase-js';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);



function Contentmessage() {

const [mensajes, setMensajes] = useState([]);
const [cargando, setCargando] = useState(true);
const [error, setError] = useState(null);
const [texto, setTexto]= useState("")


const enviarMensaje = () =>{
    supabase
    .from("mensajes")
    .insert([
        {
            mensaje:texto,
            quienenvia:3,
            aquesala:1
        }
    ])
    .then(({ error }) => {
        if(error){
            console.log(error);
            return;
        }
    });

    setTexto("")

    const nuevoMensaje = {
        mensaje:texto,
        created_at: new Date().toLocaleTimeString(),
        quienenvia:"kevin"
    }
    setMensajes([...mensajes, nuevoMensaje]);

    setTexto("")

}

  useEffect(() => {
    setCargando(true);

    // Consulta con Supabase usando .then()
    supabase
      .from('mensajes')
      .select('*')
      .order('created_at', { ascending: true })
      .then(({ data, error: supabaseError }) => {
        if (supabaseError) {
          throw supabaseError; // Envía el error directamente al bloque .catch()
        }
        setMensajes(data);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
      
  }, []); // Se ejecuta una sola vez al montar el componente

  if (cargando) return <p>Cargando mensajes...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <div>
      <div className='contentMessage'>
        
            {mensajes.map((m)=> (
               <Burbujamensaje key={m.id} mensaje={m.mensaje} hora={m.created_at} usuario={m.quienenvia} /> 
            ))}
            
      </div>
     <input 
        type="text" 
        className='campotxt'  
        placeholder='Escribe aqui tu mensaje'
        value={texto}
        onChange={(e)=> setTexto(e.target.value)}
        />
      <button onClick={enviarMensaje}>Enviar →</button>
    </div>
  )
}

export default Contentmessage
