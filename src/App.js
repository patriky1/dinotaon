import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
// importação de imagens
import logo from "./imagens/logo.png"
import fundo from "./imagens/out.jpeg"
// importação do carrosel
import Slider from './slider';



function App() {
  return (
<>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <a href='#home'> <img src={logo} height="40px" width="40px" alt='...'></img></a>
          <Navbar.Brand>Dino Ta On</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>A CIDADE</Nav.Link>
            <Nav.Link>EVENTOS</Nav.Link>
            <Nav.Link>NOTICIAS</Nav.Link>
          </Nav>
        </Container >
      </Navbar>

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
