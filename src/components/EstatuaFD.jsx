import "./EstatuaFD.css"
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
            </p>
            <p className="textCity ">
              Esta estátua é uma homenagem ao legado de Frei Damião e ao seu
              profundo impacto na vida das pessoas em Sousa e em todo o Nordeste
              brasileiro. A imponente escultura, que retrata o frei com sua
              característica batina e cruz na mão, serve como um símbolo de fé e
              devoção para os moradores locais e visitantes.
            </p>
            <p className="textCity ">
              Além de ser um importante marco religioso, a Estátua de Frei
              Damião também é uma atração turística que atrai peregrinos e
              interessados na história religiosa do Brasil. Muitos visitam a
              estátua em busca de inspiração espiritual e para conhecer mais
              sobre a vida e os ensinamentos desse notável frade capuchinho.
            </p>
            <p className="textCity ">
              Localizada em um cenário pitoresco, a estátua oferece aos
              visitantes a oportunidade de contemplação e reflexão. A área ao
              redor da estátua frequentemente é utilizada para eventos
              religiosos e celebrações especiais, proporcionando um ambiente de
              comunhão e espiritualidade.
            </p>
            <p className="textCity ">
              A Estátua de Frei Damião em Sousa não apenas celebra a vida desse
              dedicado missionário, mas também destaca a importância da religião
              e da devoção na vida da comunidade local. É um local de visita
              obrigatória para quem deseja conhecer mais sobre a cultura
              religiosa e a história da região, além de ser um lugar de paz e
              tranquilidade para todos que a visitam.
            </p>
          </Col>
          <Col lg={6} className="imagens">
            <img
              className="imagens"
              src={imgFD}
              width="600px"
              height="400px"
              alt="sousa"
            ></img>
            <img
              className="imagens"
              src={imgFD2}
              width="600px"
              height="600px"
              alt="sousa"
            ></img>
            <iframe
              style={{marginTop:"1%"}}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.467832192306!2d-38.25509462490042!3d-6.712619293283133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a45f21e8faa4b5%3A0xd73b002acb678a8b!2sEst%C3%A1tua-santu%C3%A1rio%20De%20Frei%20Dami%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1696950252647!5m2!1spt-BR!2sbr"
              width="600"
              height="300"
              allowfullscreen="0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="maps"
              className="mapAm"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EstatuaFD;
