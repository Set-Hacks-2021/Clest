import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'; 
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { useAuth } from "../authcontext.js";

export default function NavBar(){

    const { logout, signInWithGoogle, currentUser } = useAuth()
    const [error, setError] = useState("")

    async function handleLogout() {
        setError("")
        try {
            await logout()
        } catch {
            setError("Failed to log out")
        }
    }
        return(
            <div className="NavBar">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Clest</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        </Nav>
                        <Nav>
                        {/* <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                    {
                        currentUser ? <Button variant="outline-primary" onClick={handleLogout}>Log Out</Button> :
                        <Button variant="outline-primary" onClick={signInWithGoogle}>Sign in with Google</Button>
                    }
                    </Container>
                </Navbar>
            </div>
        );
}