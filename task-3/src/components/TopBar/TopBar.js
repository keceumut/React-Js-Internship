//import {useState} from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import './TopBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TopBar(props){
    
    return(
        <Navbar bg='secondary' expand='sm'>
        <Navbar.Brand>RICK & MORTY </Navbar.Brand>        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id='navbarScroll'>
        <Nav
        className="mr-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
        ></Nav>
            <Nav.Link id='character' onClick={e=>props.setContent(e.target.id)}>Characters</Nav.Link>
            <Nav.Link id='episode' onClick={e=>props.setContent(e.target.id)}>Episodes</Nav.Link>
            <Nav.Link id='location' onClick={e=>props.setContent(e.target.id)}>Location</Nav.Link>
        </Navbar.Collapse>
        </Navbar>
    )    
}

