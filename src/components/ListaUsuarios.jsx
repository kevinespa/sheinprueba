import { useEffect, useState } from 'react';
import { createClient} from '@supabase/supabase-js';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCargando(true);

    // Consulta con Supabase usando .then()
    supabase
      .from('usuarios')
      .select('*')
      .order('id', { ascending: true })
      .then(({ data, error: supabaseError }) => {
        if (supabaseError) {
          throw supabaseError; // Envía el error directamente al bloque .catch()
        }
        setUsuarios(data);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
      
  }, []); // Se ejecuta una sola vez al montar el componente

  if (cargando) return <p>Cargando usuarios...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Lista de Usuarios (Ordenados por ID)</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            [{usuario.id}] - {usuario.nombre || 'Sin nombre'} - {usuario.telefono || 'sin telefono'}
          </li>
        ))}
      </ul>
    </div>
  );
}
