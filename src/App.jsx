import { useState } from 'react'
import { Contador } from './components/contador'

const App=()=> {
  const [contar, setContar] = useState(0)

  const aumentar = () => {
    setContar (contar + 1)
  }

  const quitar = () =>{
    setContar (contar - 1)
  }
  return (
    <div>
      <h1>Hola, estos son mis primeros pasitos</h1>
      <h2>Vamos a contar, bienvenido a plaza sesamo</h2>
      <h2>{`Cuenta conmigo ${contar}`}</h2>
      <Contador numero={contar} />
      <button onClick={aumentar}>Incrementar</button>
      <button onClick={quitar}>Eliminar</button>
    </div>
  )
}

export default App
