import "./City.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NavbarContainer from "./Navbar";

export function Eventos() {
    return (
      <>
      <NavbarContainer/>
        <Container fluid className="mt-5 ">
          
            <h1>ola eventos</h1>
        </Container>
      </>
    );
  }
