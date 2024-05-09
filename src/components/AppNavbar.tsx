import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function AppNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to='/' style={{ textDecoration: 'none' }}>
        <Navbar.Brand href="#home">Spaceflight</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to='/' style={{ textDecoration: 'none' }}>
          <Nav.Link href="#home">Home</Nav.Link>
        </Link>
            <Nav.Link href="#home">News</Nav.Link>
            <Nav.Link href="#link">Live</Nav.Link>
            <Nav.Link href="#link">Articles</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;