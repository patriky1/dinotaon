import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../imagens/logo.png";
import { Link } from "react-router-dom";
import "../App.css";
import warningIcon from "../imagens/iconDev.png";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function NavbarContainer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        fixed="top"
        style={{ paddingBottom: "1px", fontSize:"15px" }}
      >
        <Container fluid>
          <a href="#home" className="logo">
            {" "}
            <img src={logo} height="40px" width="40px" alt="..."></img>
          </a>

          <Link
            className="nav-link"
            style={{ color: "white", marginInlineStart: "0.5rem" }}
            to="/"
          >
            Dino tá ON
          </Link>
          <Nav className="me-auto">
            <Link className="nav-link " to="/segundo">
              A CIDADE
            </Link>
            <Link className="nav-link" to="/events">
              EVENTOS
            </Link>
            <Link className="nav-link " to="/news">
              NOTICIAS
            </Link>
          </Nav>
          <Nav>
            <Button variant="outline-dark"
              onClick={handleShow}
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src={warningIcon}
                alt="Warning Icon"
                style={{ marginRight: "5px" }}
              />
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Desenvolvendores</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  Patriky Lucena de Brito<br></br>
                  Mayara Teixeira Santos de Lima <br></br>
                  1º Ano E - Tec<br></br>
                  2º Ano D - Tec<br></br>
              </Modal.Body>
              <Modal.Footer>
                
              </Modal.Footer>
            </Modal>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default NavbarContainer;
