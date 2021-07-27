import {useState} from 'react'
import {FormControl, Image, InputGroup, Nav, Navbar} from 'react-bootstrap'
import './TopBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TopBar(props){

    const [search,setSearch] = useState(null);

    function handleSearch(){
        props.setSeSubject(search);
    }
    
    function handleReset(){
        props.setSeSubject("");
    }
    return(
        <Navbar bg='secondary' expand='sm'>
        <Navbar.Brand onClick={handleReset}>RICK & MORTY </Navbar.Brand>        
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
            <InputGroup className='mb-3' size='sm'>
                <FormControl
                    placeholder='Search'
                    onChange={e=>setSearch(e.target.value)}
                />
                <Image onClick={handleSearch} className='mglass' src ='https://img.icons8.com/pastel-glyph/32/000000/search--v1.png'/>
            </InputGroup>
            
        </Navbar.Collapse>
        </Navbar>
    )    
}

