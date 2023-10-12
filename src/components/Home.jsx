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
          <Col lg={12} xs={12} className="Lateral">
            <img
              style={{ margin: "0" }}
              className="background"
              src={fundo}
              alt="..."
            ></img>
          </Col>
          <Col lg={12} xs={13} className="grid">
            {/* <h1 className="textogrid">SOUSA - CIDADE SORRISO DA PARAÍBA</h1> */}
            <p className="legend" style={{ marginTop: "7%", margin: "3%" }}>
              {" "}
              <span style={{ fontSize: "larger" }} className="highlight">
                Sousa
              </span>
              , carinhosamente conhecida como a "Cidade Sorriso", é um
              verdadeiro tesouro no coração do estado da Paraíba, no nordeste do
              Brasil. Localizada no Sertão paraibano, Sousa combina a beleza
              natural do semiárido com uma atmosfera vibrante e acolhedora. A
              cidade também é famosa por abrigar um valioso tesouro
              pré-histórico: o Vale dos Dinossauros. Com sua rica herança
              paleontológica, o município é um destino imperdível para os
              amantes da história da Terra. Bem-vindo a Sousa, onde o sorriso de
              sua gente e os segredos dos dinossauros se encontram em um cenário
              verdadeiramente especial.
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
        </Row>
      </Container>
      <Container style={{ background: "#FFFF" }} fluid>
        <Row>
          <Col className="d-flex justify-content-center">
            <Link to="/vale" style={{ textDecoration: "none" }}>
              <Card
                className="carddino"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  border: "none",
                  background: "transparent",
                }}
              >
                <Card.Img src="	https://cdn-icons-png.flaticon.com/128/7416/7416943.png" />
                <Card.Title className="cardTitle">TURISMO</Card.Title>
              </Card>
            </Link>
          </Col>
          <Col className="d-flex justify-content-center">
            <Link
              to="/igrejas"
              style={{ color: "black", textDecoration: "none" }}
            >
              <Card style={{ border: "none", background: "transparent" }}>
                <Card.Img src="	https://img.icons8.com/?size=80&id=0aLX4JgODHJw&format=png" />
                <Card.Title className="cardTitle">CULTURA</Card.Title>
              </Card>
            </Link>
          </Col>
          <Col className="d-flex justify-content-center">
            <Link
              to="/centroc"
              style={{ color: "black", textDecoration: "none" }}
            >
              <Card style={{ border: "none", background: "transparent" }}>
                <Card.Img src="	https://cdn-icons-png.flaticon.com/128/3019/3019220.png" />
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
