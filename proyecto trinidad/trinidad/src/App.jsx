import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra_nav from './components/header/barra-nav.jsx'
import Logo from './components/header/logo.jsx';
import Carrusel from './components/home/carrusel.jsx';
import Infomacion from './components/home/informacion.jsx';
import Formulario from './components/home/formulario.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Logo />
      <Barra_nav />
      <Carrusel />
      <Infomacion />
      <Formulario />
    </>
  )
}

export default App
