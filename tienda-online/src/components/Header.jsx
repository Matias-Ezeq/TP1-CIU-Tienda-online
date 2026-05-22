import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header(){
  return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#inicio">GameGarage</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#novedades">Novedades</Nav.Link>
          </Nav>
          <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Buscar en el catálogo"
              className=" mr-sm-2"
            />
            </Col>
        <Col xs="auto">
            <Button type="submit">Buscar</Button>
          </Col>
        </Row>
      </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header