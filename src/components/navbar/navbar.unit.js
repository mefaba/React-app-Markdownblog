import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

const NavbarUnit = () => {
    
    return (
        <div>
            <Navbar bg="warning" variant="light">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/admin">Sign In</Nav.Link>
                    <Nav.Link href="https://github.com/mefaba/ReactApp-MarkdownBlog">Github</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavbarUnit