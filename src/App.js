import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// importação de imagens
import logo from "./imagens/logo.png"
import fundo from "./imagens/fundo.png"
// importação do carrosel
import Slider from './slider';



function App() {
  return (
<>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <a> <img src={logo} height="40px" width="40px"></img></a>
          <Navbar.Brand href="#home">Dino Ta On</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  href="#home">A CIDADE</Nav.Link>
            <Nav.Link  href="#features">EVENTOS</Nav.Link>
            <Nav.Link  href="#pricing">NOTICIAS</Nav.Link>
          </Nav>
        </Container >
      </Navbar>

        <div  >
          <img  className='background' src={fundo} ></img>
          <h1 className='textogrid'>Sousa - Cidade Sorriso</h1>
        </div>
      <div className='session2'>
        <Slider />
      </div>
</>
  );
}

export default App;
