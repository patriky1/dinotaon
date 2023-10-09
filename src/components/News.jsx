import "./City.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NavbarContainer from "./Navbar";

export function News() {
    return (
      <>
      <NavbarContainer/>
        <Container fluid className="mt-5 ">
          
            <h1 style={{padding:"3%"}}>EM DESENVOLVIMENTO</h1>
        </Container>
      </>
    );
  }
