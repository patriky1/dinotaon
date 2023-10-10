import React from "react";
import { Card } from "react-bootstrap";
import { Button, Col, Container, Row } from "react-bootstrap";
import fundo from "../imagens/fundo.jpeg";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={5} xs={13} className="grid">
            <h1 className="textogrid">SOUSA - CIDADE SORRISO DA PARAÍBA</h1>
            <p className="legend">
              {" "}
              No dia 04 de junho de 1800 o Ouvidor Geral José da Silva Coutinho
              instala, oficialmente, a Vila Nova de Sousa através de Resolução
              do então Governador de Pernambuco, datada de 26 de março de 1800,
              após pleito da comunidade através de requerimento encabeçado por
              Patrício José de Almeida, Matias de Figueiredo Rocha e padre
              Manoel Vieira da Silva. Um dia antes, o Capitão Alexandre Pereira
              de Sousa fez uma doação de terras para o patrimônio do crescente
              povoado. Foi através da Lei Provincial de n° 28, de 10 de julho de
              1854, que a Vila de Sousa foi elevada à categoria de cidade
              passando, na oportunidade, a denominar-se Sousa, conhecida hoje
              por “cidade sorriso”.
            </p>
            <Link
              style={{ textDecoration: "none" }}
              to="/segundo"
              class="alinharButton"
            >
              <Button size="lg" variant="dark" className="buttonone">
                saiba mais
              </Button>
            </Link>
          </Col>
          <Col lg={7} xs={12} className="Lateral">
            <img className="background" src={fundo} alt="..."></img>
          </Col>
        </Row>
      </Container>
      <Container
        
        style={{ background: "#FFFF" }}
        fluid
      >
        <Row >
          <Col className="d-flex justify-content-center">
            <Link to="/vale" style={{ textDecoration: "none" }}>
              <Card
                className="carddino"
                style={{
                  display:"flex",
                  justifyContent:"center",
                  border: "none",
                  background: "transparent",
                }}
              >
                <Card.Img
                  
                  src="	https://cdn-icons-png.flaticon.com/128/7416/7416943.png"
                />
                <Card.Title className="cardTitle">TURISMO</Card.Title>
              </Card>
            </Link>
          </Col>
          <Col className="d-flex justify-content-center">
            <Link
              to="/igrejas"
              style={{ color: "black",
              textDecoration: "none",
              }}>
              <Card
              style={{border: "none",
              background: "transparent"}}>
              <Card.Img
              src="https://cdn-icons-png.flaticon.com/128/2242/2242235.png"/>
              <Card.Title className="cardTitle">CULTURA</Card.Title>
              </Card>
            </Link>
          </Col>
          <Col className="d-flex justify-content-center">
            <Link
              to="/centroc"
              style={{ color: "black", textDecoration: "none" }}>
              <Card
              style={{border: "none",
              background: "transparent"}}>
              <Card.Img
              src="	https://cdn-icons-png.flaticon.com/128/3019/3019220.png"
              />
              <Card.Title className="cardTitle">EVENTOS</Card.Title>
              </Card>
            </Link>
            
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
