import React from "react";
import { Button } from "react-bootstrap";
import fundo from "../imagens/fundo.jpeg";
import "./Home.css"
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
      <div className="grid">
        <img className="background" src={fundo} alt="..."></img>
        <h1 className="textogrid">Sousa - Cidade Sorriso</h1>
        {/* <h2 className="textogrid1">
          Bem-vindo à encantadora cidade de Sousa, um tesouro no coração da
          Paraíba! Sousa, carinhosamente conhecida como "Terra dos Dinossauros",
          é um destino único que combina história, cultura, esportes e um rico
          patrimônio paleontológico.
        </h2> */}
        <Link to="/segundo">
        <Button
          href="#eventos"
          variant="primary"
          size="lg"
          className="buttonone"
        >
          {" "}
          saiba mais
        </Button>
        </Link>
      </div>
    </>
  );
}

export default Home;
