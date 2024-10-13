

// import { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import './Navbar.css'

function CustomNavbar() {
  const location = useLocation();
  let navigate=useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(!!!localStorage.getItem('token'));

  const logout = () => {
    
    localStorage.removeItem('token')
    navigate('/login')
  };
  const guest=()=>{
    alert(" Login With \n Mail: guest1@gmail.com \n password: guest123")
  }
const myStyle={
  width:"100vw",
  
}
  return (
    <Navbar className='navbar' bg="cadetblue" variant="dark" expand="lg" style={myStyle}>
      <Container>
        <Link className="navbar-brand px-4" to="/">
          I-CloudBook ✅
        </Link>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link id='navli' className={location.pathname === "/" ? "active" : ""} as={Link} to="/">
              Home 
            </Nav.Link>
            <Nav.Link id='navli' className={location.pathname === "/about"  ? "active" : ""} as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link id='navli' className={location.pathname === "/instructions" ? "active" : ""} as={Link} to="/instructions">
              Instrutions
            </Nav.Link>
            <Nav.Link id='navli' className={location.pathname === "contactus" ? "active" : ""} as={Link} to="/contactus">
              Contact us
            </Nav.Link>
          </Nav>

          {!localStorage.getItem('token') ? (
            <Nav className="">
              <Link id='navlibtn' className="btn btn-primary mx-2" to='/login' role='button'>
                Login
              </Link>
              <Link id='navlibtn' className="btn btn-primary mx-2" to='/signup' role='button'>
                Signup
              </Link>
             <Link id='navlibtn' className="btn btn-primary mx-2" onClick={guest} role='button'>
                GuestMode
              </Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Button id='navlibtn' className="btn btn mx-2" onClick={logout}>
                Logout
              </Button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
