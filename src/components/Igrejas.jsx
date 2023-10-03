import React from "react";
import "./Igrejas.css";
import NavbarContainer from "./Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import imgIgreja from "../imagens/igreja.jpg";
import imgIgreja1 from "../imagens/igrFrente.jpg";
import IgrejaBJ from "../imagens/igrejaBJ.jpg";
import IntBJ from "../imagens/intBJ.jpg";
import prBJ from "../imagens/prBJ.jpeg";

function Igrejas() {
  return (
    <>
      <NavbarContainer />
      <Container fluid className="mt-5 ">
        <Row>
          <Col lg={6} className="ConteudoCity">
            <h1 className="textTitle">CENTROS RELIGIOSOS</h1>
            <p className="textCity">
              {" "}
              Seja bem-vindo a uma jornada espiritual e arquitetônica nas ruas
              de Sousa, na acolhedora Paraíba. Esta cidade encantadora é um
              tesouro de igrejas centenárias, cada uma contando uma parte da
              história deste lugar especial. Embora citaremos apenas algumas
              delas, saiba que há muitas mais a serem admiradas ao explorar essa
              joia do interior brasileiro.{" "}
            </p>
            <h3 className="textTitle ">
              Igreja Matriz de Nossa Sra. dos Remédios
            </h3>
            <p className="textCity ">
              Localizada na praça Bento Freire, mais conhecida como Praça da
              Matriz na cidade de Sousa-PB, teve sua construção iniciada em 1814
              pelo então vigário Luis José Correia de Sá e concluída em 1884. No
              entanto, as obras ficaram incompletas e, após várias paralisações
              e mudanças na arquitetura original, só teve a sua conclusão
              definitiva em 1942. Esta igreja católica é um marco histórico e
              espiritual na cidade e uma parada imperdível para quem a visita.
              <br></br>
              <br></br>A construção da Matriz de Nossa Senhora dos Remédios
              remonta ao século XIX, um período de grande fervor religioso e
              desenvolvimento da cidade de Sousa. Seu exterior apresenta uma
              impressionante arquitetura neoclássica, com detalhes que
              evidenciam a habilidade e o empenho dos artesãos da época. Ao
              entrar, os visitantes são recebidos por um ambiente igualmente
              magnífico.
              <br></br>
              <br></br>O interior da igreja é um testemunho da devoção da
              comunidade local à Nossa Senhora dos Remédios. O altar-mor é uma
              verdadeira obra de arte.
              <br></br>
              <br></br>A devoção à Nossa Senhora dos Remédios é especialmente
              celebrada durante as festas religiosas da cidade, a principal
              delas ocorre no período de 29 de agosto a 8 de setembro. A
              comunidade local se reúne para homenagear a padroeira,
              fortalecendo os laços de fé e tradição que unem o povo de Sousa.
              Visitantes são convidados a participar desses momentos especiais e
              a testemunhar a espiritualidade vibrante da cidade.
              <br></br>
              <br></br>
              Sua majestosa presença no centro da cidade convida tanto os
              habitantes locais quanto os visitantes a explorar a rica herança
              espiritual, bem como a sentir a conexão com a história e a fé que
              moldaram essa encantadora cidade.
              <br></br>
              <br></br> Portanto, se você estiver em Sousa, reserve um tempo
              para visitar a Igreja Matriz de Nossa Senhora dos Remédios e
              permita-se mergulhar na rica história e devoção que este local tem
              a oferecer.
              <br></br>
            </p>
          </Col>
          <Col lg={6} className="imagens">
            <img src={imgIgreja} width="600px" height="400px" alt="sousa"></img>
            <img
              src={imgIgreja1}
              width="600px"
              height="600px"
              alt="sousa"
            ></img>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className="ConteudoCity">
            <h3 className="textTitle ">Igreja do Bom Jesus Eucarístico</h3>
            <p className="textCity">
              É um dos tesouros arquitetônicos e espirituais de Sousa, Paraíba.
              Esta igreja católica, dedicada ao Bom Jesus Eucarístico, é um
              local de grande importância para a comunidade local e uma parada
              imperdível para quem visita à cidade.<br></br>
              <br></br>
            </p>
            <p className="textCity">
              Construída no século XIX, o interior da Igreja do Bom Jesus
              Eucarístico é igualmente impressionante. Seu altar-mor é uma obra
              de arte, com entalhes detalhados e imagens sagradas.<br></br>
              Um dos destaques desta igreja é a devoção ao Bom Jesus
              Eucarístico, que é especialmente celebrada nas festas religiosas
              da cidade. A comunidade local se reúne para celebrar a presença de
              Cristo na Eucaristia, e os visitantes são bem-vindos a participar
              desses momentos especiais de fé e devoção.
              <br></br>A Igreja do Bom Jesus Eucarístico não é apenas um marco
              religioso, mas também um marco cultural e histórico em Sousa. Sua
              presença majestosa no centro da cidade convida os habitantes e
              visitantes a explorar sua rica herança espiritual e a sentir a
              conexão com a história e a fé que moldaram esta cidade
              encantadora.
              <br></br>
              Ao lado da igreja, encontra-se a Praça do Bom Jesus Eucarístico,
              um espaço público icônico em Sousa. Esta praça não é apenas um
              local de devoção, mas também um ponto de encontro para a
              comunidade local e visitantes. Seus jardins bem cuidados, bancos e
              esculturas criam uma atmosfera acolhedora e convidativa. É um
              lugar que atrai não apenas os fiéis, mas também os amantes da
              história, da arquitetura e da cultura. Onde as pessoas podem se
              conectar com a espiritualidade, apreciar a beleza da arquitetura
              histórica e participar das tradições locais.
              <br></br>
              Portanto, se você estiver em Sousa, reserve um tempo para visitar
              a Igreja e a praça do Bom Jesus Eucarístico.
              <br></br>
              Cada uma das igrejas tem sua própria história e caráter, e juntas
              elas enriquecem a paisagem religiosa e cultural de Sousa. Se você
              estiver na cidade, não deixe de explorar esses marcos espirituais
              e sentir a conexão com a história e a fé que permeiam este lugar
              especial.<br></br>
            </p>
            <p className="textCity">
              Para se manter atualizado(a) e acompanhar os eventos das igrejas
              mencionadas, convidamos você a explorar o Instagram e procurar
              pelos perfis correspondentes. Lá, você encontrará uma fonte de
              inspiração com fotos, informações sobre serviços religiosos e
              eventos especiais que fortalecerão sua fé e conexão espiritual.
            </p>
            <p className="textCity" >
              Igreja Nossa Senhora dos Remédios: @matrizdosremedios <br></br>
              
            </p>
            <p className="textCity">
            Igreja do Bom Jesus Eucarístico: @santuario.bomjesus<br></br><br></br><br></br>
            </p>
          </Col>
          <Col lg={6} className="imagens">
            <img src={IgrejaBJ} width="600px" height="400px" alt="sousa"></img>
            <img src={IntBJ} width="600px" height="400px" alt="sousa"></img>
            <img src={prBJ} width="600px" height="400px" alt="sousa"></img>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Igrejas;
