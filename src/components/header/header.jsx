import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import VSB from "../../assets/icons/vsb.svg";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{background: "#191919"}} variant="dark">
      <Container>
        <div className="d-flex align-items-center">
          <img src={VSB} alt="vsb" style={{width: "20px", marginRight: "8px", paddingTop: "6px"}} />
          <Navbar.Brand href="./">VSB</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/jam-board">Jamboard</Nav.Link>
            <NavDropdown title="User" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
