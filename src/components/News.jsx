import "./City.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NavbarContainer from "./Navbar";

export function News() {
    return (
      <>
      <NavbarContainer/>
        <Container fluid className="mt-5 ">
          
            <h1>ola noticias</h1>
        </Container>
      </>
    );
  }
