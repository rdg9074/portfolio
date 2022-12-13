import react from "react";
import "./MainNavigation.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MainNavigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">DAZ_CV`s Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">About me</Nav.Link>
            <Nav.Link href="#pricing">Stacks</Nav.Link>
            <Nav.Link href="#pricing">Archive</Nav.Link>
            <Nav.Link href="#pricing">Project</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
