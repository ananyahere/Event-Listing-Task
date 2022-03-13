import React, { useContext } from "react"
import './Navbar.css'
// import {UserContext} from '../hooks/UserContext'
import {LoginStatusContext} from '../hooks/LoginStatusContext'
// import {Navbar, Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function NavBar() {
  // const {userState} = useContext(UserContext)
  const {isLoggedIn} = useContext(LoginStatusContext)

  const renderList = () => {
    if(isLoggedIn){
      return [
        <Link to="/createEvent">
          <li className="navStyle btn"> Create Event</li>
        </Link>,
        <Link to="/events">
          <li className="navStyle">Events</li>
        </Link>
      ]
    }else{
      return [
        <Link to="/login" >
          <li className="navStyle btn">Log in</li>
        </Link>,
        <Link to="/signup">
          <li className="navStyle">Sign up</li>
        </Link>
      ]
    }
  }

  // const renderList = () => {
  //   if(isLoggedIn){
  //     return (
  //       <div>
  //       <Nav.Link as={Link} to="/createEvent">Create Event</Nav.Link>
  //       <Nav.Link as={Link} to="/events">Events</Nav.Link>
  //       </div>
  //     )
  //   }else{
  //     return (
  //       <div>
  //       <Nav.Link as={Link} to="/login">Login</Nav.Link>
  //       <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
  //     </div>
  //     )
  //   }
  // }

  return (
    <nav>
      <ul>{renderList()}</ul>
    </nav>
    // <Navbar bg="dark" variant={"dark"} expand="lg">
    //   <Container>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav">
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         {renderList()}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Navbar.Toggle>
    //   </Container>
    //   {/* <Navbar.Toggle aria-controls="navbarScroll" />
    //   <Navbar.Collapse id="navbarScroll">
    //   <Nav
    //       className="mr-auto my-2 my-lg-0"
    //       style={{ maxHeight: '100px' }}
    //       navbarScroll
    //   >
    //       {renderList()}
    //   </Nav>
    //   </Navbar.Collapse> */}
    // </Navbar>
  )
}

export default NavBar