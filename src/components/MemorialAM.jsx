import "./City.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import NavbarContainer from "./Navbar";
import MAM from "../imagens/MAM.jpeg";

import React from "react";

function MemorialAM() {
  return (
    <>
      <NavbarContainer />
      <Container fluid className="mt-5 ">
        <Row>
          <Col lg={6} className="ConteudoCity">
            <h1 className="textTitle">MEMORIAL ANTÔNIO MARIZ</h1>
            <p className="textCity ">
              O Memorial Antônio Mariz em Sousa, Paraíba, é um espaço dedicado à
              preservação da memória e história da região, especialmente em
              relação a uma figura notável: Antônio Mariz, um dos personagens
              mais importantes da cidade.
              <br></br>
              Antônio Mariz foi um destacado político, advogado e escritor
              paraibano que exerceu diversos cargos públicos ao longo de sua
              vida, incluindo o de governador do estado da Paraíba. Sua
              influência e contribuição para o desenvolvimento da região são
              notáveis, e o memorial tem como objetivo homenagear sua trajetória
              e legado.<br></br>O memorial oferece aos visitantes a oportunidade
              de conhecer mais sobre a vida e obra de Antônio Mariz por meio de
              exposições, documentos históricos, fotografias e objetos
              relacionados à sua vida e carreira. É um espaço de valorização da
              cultura local e de resgate da história, permitindo que as gerações
              atuais e futuras compreendam a importância desse ilustre
              paraibano.<br></br>É um local que convida os visitantes a
              mergulhar na rica herança cultural e política da cidade e do
              estado.<br></br>
              Para quem se interessa por história, política e cultura regional,
              o Memorial Antônio Mariz é um destino imperdível ao visitar Sousa,
              proporcionando uma oportunidade única de conhecer mais sobre um
              dos grandes personagens da Paraíba e sua influência na região.
              <br></br>
              <br></br>
              <br></br>
            </p>
          </Col>
          <Col lg={6} className="imagemM">
            <img
              className="imagemM"
              src={MAM}
              width="600px"
              height="400px"
              alt="sousa"
            ></img>
            <div>
              <iframe
              title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.0843509123983!2d-38.23436102500508!3d-6.75956859323707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a45bf87b8bf1f3%3A0xdc35ad7cc58a765f!2sMemorial%20Ant%C3%B4nio%20Mariz!5e0!3m2!1spt-BR!2sbr!4v1696876016474!5m2!1spt-BR!2sbr"
                width="600px"
                height="400px"
                allowfullscreen="0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="mapAm"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MemorialAM;
