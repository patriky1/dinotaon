import "./City.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import NavbarContainer from "./Navbar";

import imgCity from "../imagens/imgfundo.jpeg";
import VideoSousa from "../imagens/fundo.mp4";



export function Page2() {
  return (
    <>
      <NavbarContainer />
      <Container fluid className="mt-5 ">
        <Row>
          
          <Col lg={6} className="ConteudoCity">
          <h1 className="textTitle">A Cidade</h1> 
            <p className="textCity ">
              Fundada em 1854, Sousa é uma das cidades mais antigas do interior
              da Paraíba, seu centro histórico leva os visitantes a uma viagem
              no tempo. Com aproximadamente 70 mil habitantes e situada no
              sertão paraibano, Sousa encanta por sua riqueza cultural,
              histórica e natural. Conhecida como "A Cidade Sorriso", é um
              destino imperdível para aqueles que desejam explorar as belezas do
              interior da Paraíba.
              <br></br>
              Com uma história que remonta ao período colonial, Sousa preserva
              seu patrimônio histórico, com igrejas centenárias e edifícios que
              contam a trajetória dessa cidade acolhedora.
              <br></br>A natureza é generosa em Sousa, e você encontrará
              paisagens deslumbrantes, como o famoso Vale dos Dinossauros, um
              verdadeiro tesouro pré-histórico. Além disso, a culinária local é
              uma experiência à parte, com pratos tradicionais que refletem a
              cultura e os sabores do Nordeste brasileiro.
              <br></br>
              Em Sousa, você descobrirá uma cidade que equilibra harmoniosamente
              sua herança histórica com um olhar para o futuro. Seja para
              explorar a natureza exuberante, saborear a gastronomia local ou se
              encantar com a hospitalidade de seu povo, Sousa oferece uma
              experiência única que você nunca esquecerá.
              <br></br>
              Este é o seu convite para explorar Sousa, mergulhar em sua
              história e vibrar com sua cultura. Embarque nessa jornada conosco
              e descubra tudo o que esta cidade incrível tem a oferecer.
            </p>
          </Col>
          <Col lg={6} className="imagens">
            <img src={imgCity}  width="600px"  height="400px" alt="sousa"></img>
            <video
              src={VideoSousa}
              width="600px"
              height="400px"
              alt="videoSousaPb"
              autoPlay
              muted
              loop
            ></video>
          </Col>
        </Row>
        
      </Container>
    </>
  );
}
