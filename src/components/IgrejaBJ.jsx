import "./Igrejas.css";
import NavbarContainer from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import React from "react";

import ImgIgrejaBJ from "../imagens/igrejaBJ.jpg";
import IntBJ from "../imagens/intBJ.jpg";
import prBJ from "../imagens/prBJ.jpeg";

function IgrejaBJ() {
  return (
    <>
      <Container>
        <NavbarContainer />
        <Row>
          <Col lg={6} className="ConteudoCity">
            <h3 className="textTitle2">Igreja do Bom Jesus Eucarístico</h3>
            <p className="textCity">
              Seja bem-vindo a uma jornada espiritual e arquitetônica nas ruas
              de Sousa, na acolhedora Paraíba. Esta cidade encantadora é um
              tesouro de igrejas centenárias, cada uma contando uma parte da
              história deste lugar especial. Embora citaremos apenas algumas
              delas, saiba que há muitas mais a serem admiradas ao explorar essa
              joia do interior brasileiro.
            </p>
            <p className="textCity">
              Um dos tesouros arquitetônicos e espirituais de Sousa, Paraíba.
              Esta igreja católica, dedicada ao Bom Jesus Eucarístico, é um
              local de grande importância para a comunidade local e uma parada
              imperdível para quem visita à cidade.
            </p>
            <p className="textCity">
              Construída no século XIX, o interior da Igreja do Bom Jesus
              Eucarístico é igualmente impressionante. Seu altar-mor é uma obra
              de arte, com entalhes detalhados e imagens sagradas.
            </p>
            <p className="textCity">
              Um dos destaques desta igreja é a devoção ao Bom Jesus
              Eucarístico, que é especialmente celebrada nas festas religiosas
              da cidade. A comunidade local se reúne para celebrar a presença de
              Cristo na Eucaristia, e os visitantes são bem-vindos a participar
              desses momentos especiais de fé e devoção.
            </p>
            <p className="textCity">
              Para se manter atualizado(a) e acompanhar os eventos das igrejas
              mencionadas, convidamos você a explorar o Instagram e procurar
              pelos perfis correspondentes. Lá, você encontrará uma fonte de
              inspiração com fotos, informações sobre serviços religiosos e
              eventos especiais que fortalecerão sua fé e conexão espiritual.
            </p>
            <p className="textCity">
              A Igreja do Bom Jesus Eucarístico não é apenas um marco religioso,
              mas também um marco cultural e histórico em Sousa. Sua presença
              majestosa no centro da cidade convida os habitantes e visitantes a
              explorar sua rica herança espiritual e a sentir a conexão com a
              história e a fé que moldaram esta cidade encantadora.
            </p>
            <p className="textCity">
              Ao lado da igreja, encontra-se a Praça do Bom Jesus Eucarístico,
              um espaço público icônico em Sousa. Esta praça não é apenas um
              local de devoção, mas também um ponto de encontro para a
              comunidade local e visitantes. Seus jardins bem cuidados, bancos e
              esculturas criam uma atmosfera acolhedora e convidativa. É um
              lugar que atrai não apenas os fiéis, mas também os amantes da
              história, da arquitetura e da cultura. Onde as pessoas podem se
              conectar com a espiritualidade, apreciar a beleza da arquitetura
              histórica e participar das tradições locais.
            </p>
            <p className="textCity">
              Portanto, se você estiver em Sousa, reserve um tempo para visitar
              a Igreja e a praça do Bom Jesus Eucarístico.
            </p>
            <p className="textCity">
              Cada uma das igrejas tem sua própria história e caráter, e juntas
              elas enriquecem a paisagem religiosa e cultural de Sousa. Se você
              estiver na cidade, não deixe de explorar esses marcos espirituais
              e sentir a conexão com a história e a fé que permeiam este lugar
              especial.
            </p>
            <p className="textCity">
              Para se manter atualizado(a) e acompanhar os eventos da Igreja do
              Bom Jesus Eucarístico, convidamos você a explorar o Instagram e
              procurar pelo seu perfil oficial. Lá, você encontrará uma fonte de
              inspiração com fotos, informações sobre serviços religiosos e
              eventos especiais que fortalecerão sua fé e conexão espiritual.
            </p>
            <Row>
              <Col style={{ flex: "0" }}>
                <img
                  className="instagram"
                  src="https://cdn-icons-png.flaticon.com/512/2175/2175198.png"
                  alt="instagram"
                />
              </Col>
              <Col className="insta" style={{marginTop:"1%"}}>
              <a className="instaName" href="https://www.instagram.com/santuario.bomjesus/" style={{ fontSize: "18px", marginTop:"2%", textDecoration:"none"}}>
                @santuario.bomjesus
              </a>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <img
              className="imgIgreja"
              src={ImgIgrejaBJ}
              width="600px"
              height="400px"
              alt="sousa"
            ></img>
            <img
              className="imgMatriz2"
              src={IntBJ}
              width="600px"
              height="400px"
              alt="sousa"
            ></img>
            <img
              className="imgMatriz2"
              src={prBJ}
              width="600px"
              height="400px"
              alt="sousa"
            ></img>
            <div className="map">
              <iframe
                title="maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.092435994906!2d-38.23108412500506!3d-6.758582093238007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a45bf91434b43b%3A0x5e4c1256a832d827!2sSantu%C3%A1rio%20Bom%20Jesus%20Eucar%C3%ADstico%20Aparecido!5e0!3m2!1spt-BR!2sbr!4v1696943905154!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                allowfullscreen="0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="mapIgrejas"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default IgrejaBJ;
