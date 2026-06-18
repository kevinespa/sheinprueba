import { useEffect, useState } from 'react';
import { createClient} from '@supabase/supabase-js';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);


function GuardarUsuario() {



  return (
    <div>
      <input type="text" placeholder='coloca tu nombre' />
      <input type="text" placeholder='coloca tu telefono' />
      <button>enviar</button>
    </div>
  )
}

export default GuardarUsuario
