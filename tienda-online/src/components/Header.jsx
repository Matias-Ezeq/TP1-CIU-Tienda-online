import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Header(){
  return(
    <header>
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="d-flex flex-column align-items-center" >
      <Container fluid>
        <Navbar.Brand as={Link} to='/' className="me-auto">
          <FontAwesomeIcon icon="fa-solid fa-gamepad" />GameGarage
        </Navbar.Brand>
        <Form inline>
          <Row>
            <Col xs="auto">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Buscar en el catálogo"
                  className=" mr-sm-2"
                />
                <Button variant="secondary" id="Buscar">
                  <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Form>
        <Button href="#carrito" variant="secondary" className="ms-auto">
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        </Button>
      </Container>
      <Container fluid>
        <Nav variant="underline" defaultActiveKey="#inicio">
          <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
          <Nav.Link as={Link} to="/catalogo">Catálogo</Nav.Link>
          <Nav.Link as={Link} to="/novedades">Novedades</Nav.Link>
          <Nav.Link as={Link} to="/ofertas">Ofertas</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header