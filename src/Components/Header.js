//import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';
import '../App.css';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      {/* <Container> */}
        <Navbar.Brand href="#home" className="ms-5">JK Photography</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-5 me-auto ">
            <Nav.Link href="#home" >Home</Nav.Link>
            <Link to='Aboutus' smooth={true} duration={500}>
            <Nav.Link href="#link">About Us</Nav.Link></Link>
            <Nav.Link href="#link">Pre Weddings</Nav.Link>
            <Nav.Link href="#link">Weddings</Nav.Link>
            <Nav.Link href="#link">Puberty</Nav.Link>
            <Nav.Link href="#link">Modelling</Nav.Link>
            <Nav.Link href="#link">Candid</Nav.Link>
            <Link to='Testinimonial' smooth={true} duration={500}>
            <Nav.Link href="#link">Testimonial</Nav.Link></Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default BasicExample;