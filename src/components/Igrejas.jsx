import React from "react";
import "./Igrejas.css"
import NavbarContainer from "./Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
// import imgIgreja from "../imagens/igreja.jpg";
// import imgIgreja1 from "../imagens/igrFrente.jpg";
// import IgrejaBJ from "../imagens/igrejaBJ.jpg";
// import IntBJ from "../imagens/intBJ.jpg";
// import prBJ from "../imagens/prBJ.jpeg";

function Igrejas() {
  return (
    <>
      <NavbarContainer />
      <Container fluid className="mt-5 ">
        <Row>
          <Col lg={6} className="ConteudoCity">
            <h1 className="textTitle">
              Igreja Matriz de Nossa Sra. dos Remédios
            </h1>
            <p className="textCity">
              Seja bem-vindo a uma jornada espiritual e arquitetônica nas ruas
              de Sousa, na acolhedora Paraíba. Esta cidade encantadora é um
              tesouro de igrejas centenárias, cada uma contando uma parte da
              história deste lugar especial. Embora citaremos apenas algumas
              delas, saiba que há muitas mais a serem admiradas ao explorar essa
              joia do interior brasileiro.
            </p>
            <p className="textCity">
              Localizada na praça Bento Freire, mais conhecida como Praça da
              Matriz na cidade de Sousa-PB, teve sua construção iniciada em 1814
              pelo então vigário Luis José Correia de Sá e concluída em 1884. No
              entanto, as obras ficaram incompletas e, após várias paralisações
              e mudanças na arquitetura original, só teve a sua conclusão
              definitiva em 1942. Esta igreja católica é um marco histórico e
              espiritual na cidade e uma parada imperdível para quem a visita.
            </p>
            <p className="textCity">
              A construção da Matriz de Nossa Senhora dos Remédios remonta ao
              século XIX, um período de grande fervor religioso e
              desenvolvimento da cidade de Sousa. Seu exterior apresenta uma
              impressionante arquitetura neoclássica, com detalhes que
              evidenciam a habilidade e o empenho dos artesãos da época. Ao
              entrar, os visitantes são recebidos por um ambiente igualmente
              magnífico.
            </p>
            <p className="textCity">
              O interior da igreja é um testemunho da devoção da comunidade
              local à Nossa Senhora dos Remédios. O altar-mor é uma verdadeira
              obra de arte.
            </p>
            <p className="textCity">
              A devoção à Nossa Senhora dos Remédios é especialmente celebrada
              durante as festas religiosas da cidade,
              <span style={{ fontWeight: "bold", color: "black" }}>
                {" "}
                a principal delas ocorre no período de 29 de agosto a 8 de
                setembro.
              </span>
              A comunidade local se reúne para homenagear a padroeira,
              fortalecendo os laços de fé e tradição que unem o povo de Sousa.
              Visitantes são convidados a participar desses momentos especiais e
              a testemunhar a espiritualidade vibrante da cidade.
            </p>
            <p className="textCity">
              Sua majestosa presença no centro da cidade convida tanto os
              habitantes locais quanto os visitantes a explorar a rica herança
              espiritual, bem como a sentir a conexão com a história e a fé que
              moldaram essa encantadora cidade.
            </p>
            <p className="textCity">
              Portanto, se você estiver em Sousa, reserve um tempo para visitar
              a Igreja Matriz de Nossa Senhora dos Remédios e permita-se
              mergulhar na rica história e devoção que este local tem a
              oferecer.
            </p>
            <p className="textCity">
              Para se manter atualizado(a) e acompanhar os eventos da Igreja
              Matriz Nossa de Senhora dos Remédios, convidamos você a explorar o
              Instagram e procurar pelo seu perfil oficial. Lá, você encontrará
              uma fonte de inspiração com fotos, informações sobre serviços
              religiosos e eventos especiais que fortalecerão sua fé e conexão
              espiritual.
            </p>
            <Row>
              <Col style={{flex:"0"}}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2175/2175198.png"
                alt="instagram"
                className="instagram"
              />
              </Col>
              <Col>
              <p className="instaName" style={{ fontSize: "18px", marginTop:"2%"}}>
                @matrizdosremedios
              </p>
              </Col>
            </Row>
          </Col>
          <Col lg={6} >
            {/* <img
              className="imagens"
              src={imgIgreja}
              width="600px"
              height="400px"
              alt="sousa"
            ></img>
            <img
              className="imagens"
              src={imgIgreja1}
              width="600px"
              height="600px"
              alt="sousa"
            ></img> */}
            <iframe
              
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31698.45663811373!2d-38.2823313374944!3d-6.73233975540068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a45c07799e1e5f%3A0x34b5768f68aaaecf!2sIgreja%20Matriz%20de%20Nossa%20Senhora%20dos%20Rem%C3%A9dios!5e0!3m2!1spt-BR!2sbr!4v1696796095346!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="maps"
              className="mapIgrejas"
            ></iframe>
          </Col>
        </Row>
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
              <Col style={{flex:"0"}}>
              <img
                className="instagram"
                src="https://cdn-icons-png.flaticon.com/512/2175/2175198.png"
                
                alt="instagram"
              />
              </Col>
              <Col>
              <p className="instaName" style={{ fontSize: "18px", marginTop:"2%",}}>
              @santuario.bomjesus
              </p>
              </Col>
            </Row>
          </Col>
          <Col lg={6} >
            {/* <img
              className="imagens"
              src={IgrejaBJ}
              width="600px"
              height="400px"
              alt="sousa"
            ></img>
            <img
              className="imagens"
              src={IntBJ}
              width="600px"
              height="400px"
              alt="sousa"
            ></img>
            <img
              className="imagens"
              src={prBJ}
              width="600px"
              height="400px"
              alt="sousa"
            ></img> */}
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

export default Igrejas;
