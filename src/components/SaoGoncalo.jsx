import "./City.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import NavbarContainer from "./Navbar";
import React from "react";
import imgSG from "../imagens/SG.jpg"
import imggruta from "../imagens/grutaSG.jpg"

function SaoGoncalo() {
  return (
    <>
      <NavbarContainer />
      <Container fluid className="mt-5 ">
        <Row>
          <Col lg={6} className="ConteudoCity">
            <h1 className="textTitle">SÃO GONÇALO</h1>
            <p className="textCity ">
              São Gonçalo, distrito do município de Sousa, na Paraíba, é um
              lugar de grande significado histórico e cultural, onde a natureza
              exuberante se une à devoção religiosa. Localizado a poucos
              quilômetros do centro de Sousa, este distrito é conhecido
              principalmente pelo seu belo açude, sua devoção religiosa e seu
              estilo de vida tranquilo.
              <br></br>O açude de São Gonçalo é uma verdadeira joia da região.
              Suas águas cristalinas não apenas abastecem a cidade, mas também
              proporcionam um cenário espetacular para os moradores locais e
              visitantes.
              <br></br>A devoção religiosa é uma parte central da vida em São
              Gonçalo. A Igreja de São Gonçalo, padroeiro do distrito, é um
              ponto de encontro espiritual para a comunidade local. Durante as
              festividades em homenagem a São Gonçalo, a cidade se enche de
              celebrações religiosas, incluindo procissões que atraem fiéis de
              toda a região. Outro destaque é a Gruta de Nossa Senhora de
              Lourdes, um lugar de profunda devoção e beleza natural que atrai
              visitantes de todos os lugares em busca de paz espiritual e
              contato com a natureza. Muitos peregrinos e turistas visitam a
              gruta em busca de conforto espiritual, cura e esperança.
              Acredita-se que as águas que fluem na gruta tenham propriedades
              especiais, e muitos devotos as utilizam para fazer suas orações e
              pedidos.
              <br></br>A tranquilidade de São Gonçalo é um contraste bem-vindo
              para aqueles que buscam escapar da agitação da vida moderna. Aqui,
              os visitantes podem experimentar a autêntica cultura sertaneja,
              desde a culinária típica até as tradições musicais e culturais que
              permeiam a vida cotidiana.
              <br></br>O pôr do sol em São Gonçalo é um espetáculo à parte e um
              verdadeiro atrativo turístico para quem visita este distrito
              encantador de Sousa, na Paraíba. À medida que o sol se aproxima do
              horizonte, os tons quentes de laranja, vermelho e dourado se
              misturam no céu, refletindo nas águas tranquilas do açude. Esse
              espetáculo de cores e reflexos cria uma atmosfera mágica e convida
              os espectadores a contemplarem a beleza da natureza. Os visitantes
              podem escolher diferentes pontos ao redor do açude para apreciar
              esse momento único.<br></br>
              Em resumo, São Gonçalo é um destino que oferece uma combinação
              única de beleza natural, devoção religiosa e cultura sertaneja. Se
              você busca um refúgio sereno no coração do sertão paraibano, São
              Gonçalo em Sousa-PB é o lugar perfeito para se reconectar com a
              natureza, a fé e a cultura regional.<br></br><br></br><br></br>
            </p>
          </Col>
          <Col lg={6} className="imagens">
            <img className="imagens" src={imgSG} width="600px" height="400px" alt="sousa"></img>
            <img className="imagens" src={imggruta} width="600px" height="400px" alt="sousa"></img>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SaoGoncalo;
