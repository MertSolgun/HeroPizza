import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Basket from "./Basket";
import { ContContext } from "../context/ContProvider";
import { FaCartShopping } from "react-icons/fa6";
import Herologo from "./herologo.png";

function NavbarComponent() {
  const { total, basket } = useContext(ContContext);

  const { show, setShow, handleClose, handleShow } = useContext(ContContext);

  const location = useLocation();
  const menupage = location.pathname === "/Menu";

  return (
    <>
      <Navbar data-bs-theme="dark" className="navbar">
        <Container>
          <Link to="/home" className="font fs-2 font-bold ">
            <img src={Herologo} alt="" width={"100px"} />
          </Link>
          <Nav className="me-auto gap">
            <Link
              to="/home"
              className="text-white fw-bold font fs-2 text-decoration-none "
            >
              Home
            </Link>
            <Link
              to="/Menu"
              className="text-white fw-bold font fs-2 text-decoration-none "
            >
              Menu
            </Link>
          </Nav>
        </Container>
        <>
          {menupage && (
            <Button
              onClick={handleShow}
              className="me-4  position-relative basketBtn"
            >
              <FaCartShopping />
              <div className="basketLength">
                <p>{basket.length}</p>
              </div>
            </Button>
          )}

          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="font fs-1 text-center justify-content-center mx-auto">
                Basket
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Basket />
              {basket.length !== 0 && (
                <div className="bg-success totalPrice">
                  <h1>Total: {total.toFixed(2)}$</h1>
                </div>
              )}
            </Offcanvas.Body>
          </Offcanvas>
        </>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
