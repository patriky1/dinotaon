import "./City.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import NavbarContainer from "./Navbar";
import React from "react";
import imgFD from "../imagens/FREIDM.jpeg";
import imgFD2 from "../imagens/FD2.jpeg";

function EstatuaFD() {
  return (
    <>
      <NavbarContainer />
      <Container fluid className="mt-5 ">
        <Row>
          <Col lg={6} className="ConteudoCity">
            <h1 className="textTitle">ESTÁTUA FREI DAMIÃO</h1>
            <p className="textCity ">
              A Estátua de Frei Damião, localizada na cidade de Sousa, Paraíba,
              é uma impressionante representação de um dos mais renomados
              religiosos brasileiros. Frei Damião de Bozzano, nascido na Itália
              em 1898 e falecido no Brasil em 1997, dedicou grande parte de sua
              vida ao trabalho missionário e à propagação da fé católica.
              <br></br>Esta estátua é uma homenagem ao legado de Frei Damião e
              ao seu profundo impacto na vida das pessoas em Sousa e em todo o
              Nordeste brasileiro. A imponente escultura, que retrata o frei com
              sua característica batina e cruz na mão, serve como um símbolo de
              fé e devoção para os moradores locais e visitantes.
              <br></br>Além de ser um importante marco religioso, a Estátua de
              Frei Damião também é uma atração turística que atrai peregrinos e
              interessados na história religiosa do Brasil. Muitos visitam a
              estátua em busca de inspiração espiritual e para conhecer mais
              sobre a vida e os ensinamentos desse notável frade capuchinho.
              <br></br>Localizada em um cenário pitoresco, a estátua oferece aos
              visitantes a oportunidade de contemplação e reflexão. A área ao
              redor da estátua frequentemente é utilizada para eventos
              religiosos e celebrações especiais, proporcionando um ambiente de
              comunhão e espiritualidade.
              <br></br>A Estátua de Frei Damião em Sousa não apenas celebra a
              vida desse dedicado missionário, mas também destaca a importância
              da religião e da devoção na vida da comunidade local. É um local
              de visita obrigatória para quem deseja conhecer mais sobre a
              cultura religiosa e a história da região, além de ser um lugar de
              paz e tranquilidade para todos que a visitam.<br></br>
              <br></br>
              <br></br>
            </p>
          </Col>
          <Col lg={6} className="imagens">
            <img src={imgFD} width="600px" height="400px" alt="sousa"></img>
            <img src={imgFD2} width="600px" height="600px" alt="sousa"></img>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EstatuaFD;
