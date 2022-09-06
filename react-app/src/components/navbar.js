import { NavbarBtn } from "./navbar_btn";
import colors from '../config/color.ts'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LogoutBtn } from "./logout_btn"; 

function Navigationbar()
{

    return (
      <Navbar sticky="top" expand="lg" style={{backgroundColor:`${colors[4]}`}} variant="dark">
        <Container>
          <Navbar.Brand href="/" style={{color:`${colors[0]}`,fontSize:'xx-large'}}>Codefun Exam</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavbarBtn name="Problems" url="problems"/>
              <NavbarBtn name="Submissions" url="submissions"/>
              <LogoutBtn /> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navigationbar ;