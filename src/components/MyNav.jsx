import { Container, Nav, Navbar } from "react-bootstrap";
import navImage from "../logo192.png";

const MyNav = () => (
  <Navbar bg="warning" expand="lg">
    <Container fluid>
      <Navbar.Collapse>
        <Nav>
          <Navbar.Brand>
            <img id="logo" src={navImage} alt="logo" />
          </Navbar.Brand>
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;
