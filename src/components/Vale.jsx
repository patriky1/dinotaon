import "../components/Vale.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import NavbarContainer from "./Navbar";
import Carousel from "react-bootstrap/Carousel";
import React from 'react'


const renderImages = [
    {
      image: require("../imagens/entrada.jpeg"),
      title: "VALE DOS DINOSSAUROS",
      subtitle: "Entrada para o vale dos dinossauros em Sousa-Pb",
    },
    {
      image: require("../imagens/exe1.jpeg"),
      title: "MUSEU",
      subtitle: "Amostras de varias especies de dinossauros",
    },
    {
      image: require("../imagens/exe2.jpg"),
      title: "MUSEU",
      subtitle: "Amostras de varias especies de dinossauros",
    },
    {
      image: require("../imagens/exe3.jpg"),
      title: "MUSEU",
      subtitle: "Amostras de varias especies de dinossauros",
    },
    {
      image: require("../imagens/exe4.jpg"),
      title: "MUSEU",
      subtitle: "Amostras de varias especies de dinossauros",
    },
    {
      image: require("../imagens/exe5.jpg"),
      title: "MUSEU",
      subtitle: "Amostras de varias especies de dinossauros",
    },
    {
      image: require("../imagens/exe6.jpg"),
      title: "MUSEU",
      subtitle: "Amostras de varias especies de dinossauros",
    },
    {
      image: require("../imagens/exe7.jpg"),
      title: "MUSEU",
      subtitle: "Amostras de varias especies de dinossauros",
    },
    {
      image: require("../imagens/exe8.jpg"),
      title: "MUSEU",
      subtitle: "Amostras de varias especies de dinossauros",
    },
  ];


function Vale() {
  return (
    <>
      <NavbarContainer />
      <Container fluid className="mt-5 ">
      <Row>
          <Col lg={6} className="ConteudoCity">
            <h1 className="textTitle">Vale dos Dinossauros</h1>
            <p className="textCity ">
              Um dos destinos mais intrigantes do Brasil: o Vale dos
              Dinossauros, localizado em Sousa, na ensolarada Paraíba é um lugar
              onde o tempo se transforma em história, e os visitantes têm a
              oportunidade de viajar milhões de anos atrás no tempo, até a era
              dos dinossauros. <br></br>O Vale é uma verdadeira cápsula do tempo
              para o período Cretáceo, quando esses imensos répteis dominavam a
              Terra. Com pegadas fossilizadas preservadas em rochas calcárias,
              aqui, você encontrará uma variedade de rastros deixados por
              diferentes espécies de dinossauros, cada um contando sua própria
              história. Os guias especializados fornecerão informações
              fascinantes sobre essas criaturas antigas, tornando a visita
              educativa e envolvente.
              <br></br>
              Para uma compreensão ainda mais profunda desse mundo antigo, o
              Vale dos Dinossauros abriga um museu de paleontologia, com
              fósseis, réplicas de dinossauros e exposições interativas que
              trazem a história à vida. É uma experiência educacional e
              emocionante para todas as idades.
              <br></br>O Vale dos Dinossauros em Sousa-PB, é um destino que
              combina ciência, história e natureza em um único lugar. É uma
              oportunidade incrível de explorar o passado da Terra e criar
              memórias duradouras. Seja você um entusiasta da paleontologia, um
              amante da natureza ou simplesmente alguém em busca de uma
              experiência única, o Vale dos Dinossauros tem algo para todos.
              <br></br>
              <br></br>
              <br></br>
            </p>
          </Col>
          <Col lg={6} className="imagens">
            <Carousel className="carousel2">
              {renderImages.map((slide) => (
                <Carousel.Item key={slide.image} interval={2000}>
                  <img
                     style={{width:"100vw"}}
                    src={slide.image}
                    alt="slides"
                  />
                  <Carousel.Caption className="textdecor">
                    <h5 className="textdecor">{slide.title}</h5>
                    <p className="textdecor">{slide.subtitle}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Vale
