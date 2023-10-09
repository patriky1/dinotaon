import "./City.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import NavbarContainer from "./Navbar";

import imgCity from "../imagens/imgfundo.jpeg";
import VideoSousa from "../imagens/fundo.mp4";
import aspas from "../imagens/aspas.svg";
export function Page2() {
  return (
    <>
      <NavbarContainer />
      <Container fluid className="mt-5">
        <Row>
          <h1 className="textTitle">A Cidade</h1>
          <p className="cardImage">
            <img className="Aspas" alt="aspas" src={aspas}></img>
            <br></br>
            <p className="Apresentation">
              Bem-vindo à encantadora cidade de Sousa, um tesouro no coração da
              Paraíba!<br></br> Sousa, carinhosamente conhecida como "Terra dos
              Dinossauros", é um destino único que combina história, cultura,
              esportes e um rico patrimônio paleontológico.
            </p>
          </p>
        </Row>
        <Row>
          <Col lg={6} className="ConteudoCity">
            <p className="textCity">
              <span className="highlight">Fundada em 1854</span>, Sousa é uma
              das cidades mais antigas do interior da Paraíba. Seu centro
              histórico leva os visitantes a uma viagem no tempo. Com
              aproximadamente 70 mil habitantes e situada no sertão paraibano,
              Sousa encanta por sua riqueza cultural, histórica e natural.
              Conhecida como "A Cidade Sorriso", é um destino imperdível para
              aqueles que desejam explorar as belezas do interior da Paraíba.
              <br />
              <br />
              Com uma história que remonta ao período colonial, Sousa preserva
              seu patrimônio histórico, com igrejas centenárias e edifícios que
              contam a trajetória dessa cidade acolhedora.
              <br />
              <br />
              <p className="textCity">
                A natureza é generosa em Sousa, e você encontrará paisagens
                deslumbrantes, como o famoso Vale dos Dinossauros, um verdadeiro
                tesouro pré-histórico. Além disso, a culinária local é uma
                experiência à parte, com pratos tradicionais que refletem a
                cultura e os sabores do Nordeste brasileiro.
              </p>
              <p className="textCity">
                Em Sousa, você descobrirá uma cidade que equilibra
                harmoniosamente sua herança histórica com um olhar para o
                futuro. Seja para explorar a natureza exuberante, saborear a
                gastronomia local ou se encantar com a hospitalidade de seu
                povo, Sousa oferece uma experiência única que você nunca
                esquecerá.
              </p>
              <br />
              Este é o seu convite para explorar Sousa, mergulhar em sua
              história e vibrar com sua cultura. Embarque nessa jornada conosco
              e descubra tudo o que esta cidade incrível tem a oferecer.
            </p>
          </Col>
          <Col lg={6} className="imagens">
            <img
              className="imagens"
              src={imgCity}
              width="800px"
              height="400px"
              alt="Imagem de Sousa"
            />
            <video
              className="imagens"
              src={VideoSousa}
              width="800px" 
              height="auto"
              alt="Vídeo de Sousa"
              autoPlay
              muted
              loop
            ></video>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.081447843049!2d-38.23533012031097!3d-6.759922775798044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a45b8f7960d423%3A0x59341a5e4cf7045e!2sSousa%2C%20Para%C3%ADba%20-%20BR!5e0!3m2!1spt-BR!2sbr!4v1696876675920!5m2!1spt-BR!2sbr"
              width="410"
              height="300"
              allowfullscreen="0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="maps"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </>
  );
}
