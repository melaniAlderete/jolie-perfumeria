import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import CartWidget from "./CartWidget";

const Header = () => {
  const navigate = useNavigate()
  return (
    <>
      <Navbar sticky="top" bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={()=>{navigate("/")}}>Jolie</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate("/productos/fragancias")}}>Fragancias</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/productos/makeup")}}>Make up</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/productos/capilar")}}>Capilar</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
