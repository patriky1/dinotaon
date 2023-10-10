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
             
              <p className="textCity ">
              Localizado em um prédio histórico que respira cultura e história,
              o Centro Cultural Banco do Nordeste em Sousa é um ponto de
              encontro para amantes da arte, estudantes ávidos por conhecimento
              e comunidades em busca de atividades culturais enriquecedoras.
              </p>
              <p className="textCity ">
                Aqui, você encontrará exposições de arte contemporânea
              que desafiam a mente e inspiram a criatividade. Há também
              apresentações teatrais que encantam a plateia e concertos que
              elevam a alma. As palestras e oficinas oferecidas enriquecem
              nossos conhecimentos e habilidades.
              </p>
              <p className="textCity ">
              Este espaço não é apenas um centro cultural, mas também um local
              para a troca de ideias e o aprendizado. Sua biblioteca é um
              tesouro de conhecimento, e o auditório é palco de debates
              importantes.
              </p>
              
              <p className="textCity ">
                O Centro Cultural Banco do Nordeste em Sousa-PB é um
              convite para explorar, aprender e se encantar. Junte-se a nós e
              mergulhe em um mundo de cultura, arte e aprendizado. Venha
              conhecer este rico cenário cultural em Sousa!
              </p>            
            </p>

          </Col>
          <Col lg={6} className="imagens">
            <img className="imagens" src={Cc} width="600px" height="400px" alt="sousa"></img>
            <img className="imagens" src={Cc1} width="600px" height="400px" alt="sousa"></img>
            
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.0918690319436!2d-38.23426462031118!3d-6.758651275802515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a45bf91e8841d1%3A0x24882822f3103a78!2sCentro%20Cultural%20Banco%20do%20Nordeste%20-%20CCBNB%20Sousa!5e0!3m2!1spt-BR!2sbr!4v1696882543462!5m2!1spt-BR!2sbr"
              width="410"
              height="300"
              style={{margin:"2px"}}
              allowfullscreen="0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="mapAm"
            ></iframe>
            
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CC;
