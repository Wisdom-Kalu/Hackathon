import React from 'react';
import { Container, Row, Col, Button, ButtonGroup, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // Inline styles
  const navbarStyle = {
    marginBottom: '20px',
  };

  const buttonGroupStyle = {
    marginBottom: '20px',
  };

  const pentagonStyle = {
    fill: '#AED6F1',
    stroke: '#AED6F1',
    strokeWidth: 1
  };

  const labelStyle = {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: '0.85rem',
    textAlign: 'center',
    width: '100px',
  };

  const contentBoxStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498DB',
    color: 'white',
    borderRadius: '5px',
    padding: '2px 5px',
    fontSize: '0.7rem',
    width: '80px',
    height: '20px',
    position: 'absolute',
  };

  const centralLabelStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontWeight: 'bold',
    fontSize: '0.85rem',
    textAlign: 'center',
    padding: '10px',
    backgroundColor: 'white',
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  // The positions for the labels and content boxes will be rough estimates
  // You'll need to adjust the top, left, right, and bottom values to match the design precisely

  return (
    <div>
      <Navbar color="light" light expand="md" style={navbarStyle}>
        <NavbarBrand href="/">Your Logo</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/home/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/manual/">Manual</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/questions/">Questions</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/developer/">Developer</NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }} style={buttonGroupStyle}>
            <ButtonGroup>
              <Button color="info">Data Results</Button>
              <Button color="info">Graph</Button>
            </ButtonGroup>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col className="text-center" style={{ position: 'relative', height: '500px' }}>
            <svg width="100%" height="100%" viewBox="0 0 102 102" style={{ maxWidth: '500px', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, margin: 'auto' }}>
              <polygon points="51,1 100,38 82,101 20,101 1,38" style={pentagonStyle} />
            </svg>
            <div style={{ ...labelStyle, top: '0', left: '50%', transform: 'translate(-50%, -50%)' }}>Social</div>
            <div style={{ ...labelStyle, top: '25%', right: '25%', transform: 'translateY(-50%) rotate(-54deg)' }}>Individual</div>
            <div style={{ ...labelStyle, top: '100%', right: '23%', transform: 'translate(-50%, -50%)' }}>Technical</div>
            <div style={{ ...labelStyle, top: '100%', left: '32%', transform: 'translate(-50%, -50%)' }}>Economic</div>
            <div style={{ ...labelStyle, top: '25%', left: '22%', transform: 'translateY(-50%) rotate(54deg)' }}>Environmental</div>
            
            <div style={{ ...contentBoxStyle, top: '85%', left: '39%' }}>Structural</div>
            <div style={{ ...contentBoxStyle, top: '72%', left: '45%' }}>Enabling</div>
            <div style={{ ...contentBoxStyle, top: '60%', left: '50%' }}>Immediate</div>
            {/* Position the rest of the content boxes similarly */}

            <div style={centralLabelStyle}>The Software</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;