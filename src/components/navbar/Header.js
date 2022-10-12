import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";

const Header = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>Jolie</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>Inicio</Nav.Link>
            <Nav.Link>Tienda</Nav.Link>
            <Nav.Link>Nosotros</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
