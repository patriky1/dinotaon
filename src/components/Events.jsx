import "./Events.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NavbarContainer from "./Navbar";
import { Card, Row } from "react-bootstrap";
import mapaSousa from "../imagens/mapaSousa.png"

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';


export function Eventos() {
  const [show, setShow] = useState(false);
  
  const [fullscreen] = useState(true);
  



    return (
      <>
      <NavbarContainer/>
        <Container fluid className="mt-5 ">
          <Row>
          <Card
                className="cardEvent"
                style={{
                  background: "transparent",
                }}
              >
                <Card.Img className="cardImg" style={{width:"500px"}} src={mapaSousa} />
                <div style={{justifyContent:"center", display:"flex", margin:"2%"}}>
                <Button style={{maxWidth:"70%", display:"flex", justifyContent:"center"}} variant="dark" size="lg" onClick={() => setShow(true)}>
                 Detalhes
                </Button>
                </div>
              </Card>   
          </Row>
        </Container>

        <Modal
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header style={{marginLeft:"0"}} closeButton>
          <Modal.Title  id="example-custom-modal-styling-title">
            Mapa  de Sousa
          </Modal.Title>
        </Modal.Header>
        <Image className="imageCard"  src={mapaSousa} fluid />
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
      </>
    );
  }
