import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'react-bootstrap';
import NavbarContainer from "./components/Navbar"
// importação de imagens
import fundo from "./imagens/out.jpeg"
// importação do carrosel
import Slider from './slider';

//importação pagina 2


function App() {
  return (
<>

        <NavbarContainer/>
        <div className='grid'>
          <img  className='background' src={fundo} alt='...' ></img>
          <h1 className='textogrid'>Sousa - Cidade Sorriso</h1>
          <h2 className='textogrid1'>Bem-vindo à encantadora cidade de Sousa, 
          um tesouro no coração da Paraíba! Sousa, 
          carinhosamente conhecida como "Terra dos Dinossauros", 
          é um destino único que combina história, cultura, 
          esportes e um rico patrimônio paleontológico.</h2>
          <Button href="#eventos" variant="warning" size="lg" className='buttonone'> saiba mais</Button>
        </div>
      <div className='session2' id='eventos'>
        <Slider />
      </div>

</>
  );
}

export default App;
