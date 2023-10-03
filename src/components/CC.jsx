import "./City.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import NavbarContainer from "./Navbar";
import React from "react";
import Cc from "../imagens/Cc.jpg"
import Cc1 from "../imagens/Cc1.jpg"



function CC() {
  return (
    <>
      <NavbarContainer />
      <Container fluid className="mt-5 ">
        <Row>
          <Col lg={6} className="ConteudoCity">
            <h1 className="textTitle">CENTRO CULTURAL</h1>
            <p className="textCity ">
              O Centro Cultural Banco do Nordeste em Sousa-PB é um verdadeiro
              oásis de cultura e arte no coração do sertão paraibano. Este
              espaço é parte integrante da rede de centros culturais mantidos
              pelo Banco do Nordeste, dedicados a promover a cultura, a educação
              e o desenvolvimento na região nordestina do Brasil.
              <br></br>
              Localizado em um prédio histórico que respira cultura e história,
              o Centro Cultural Banco do Nordeste em Sousa é um ponto de
              encontro para amantes da arte, estudantes ávidos por conhecimento
              e comunidades em busca de atividades culturais enriquecedoras.
              <br></br>Aqui, você encontrará exposições de arte contemporânea
              que desafiam a mente e inspiram a criatividade. Há também
              apresentações teatrais que encantam a plateia e concertos que
              elevam a alma. As palestras e oficinas oferecidas enriquecem
              nossos conhecimentos e habilidades.
              <br></br>
              Este espaço não é apenas um centro cultural, mas também um local
              para a troca de ideias e o aprendizado. Sua biblioteca é um
              tesouro de conhecimento, e o auditório é palco de debates
              importantes.
              <br></br>O Centro Cultural Banco do Nordeste em Sousa-PB é um
              convite para explorar, aprender e se encantar. Junte-se a nós e
              mergulhe em um mundo de cultura, arte e aprendizado. Venha
              conhecer este rico cenário cultural em Sousa!
            </p>
          </Col>
          <Col lg={6} className="imagens">
            <img src={Cc} width="600px" height="400px" alt="sousa"></img>
            <img src={Cc1} width="600px" height="400px" alt="sousa"></img>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CC;
