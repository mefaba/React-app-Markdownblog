import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

const NavbarUnit = () => {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                     <Link to="/">Home</Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavbarUnit