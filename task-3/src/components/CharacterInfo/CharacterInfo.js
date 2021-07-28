import './CharacterInfo.css'
import { Modal,Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardInModal from '../CardInModal/CardInModal';
export default function CharacterInfo(props){

    const [path,setPath] = useState('');
    const [element,setElement] = useState();
    const [cont,setCont]= useState(props.content);

    function handleClose(){
        props.handleClose();
        setCont(props.content);
        setPath('');
    }
    function handleClick(){
        setPath(props.item.location.url);
        setCont('location');
    }
    function handleOrigin(){
        setPath(props.item.origin.url);
        setCont('location');
    }
    useEffect(()=>{
        const getData = async ()=>{
            props.setItem((await axios.get(path)).data)
        }
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[path]
    )
    useEffect(()=>{
        setCont(props.content);
    },[props.content]
    );
    useEffect(()=>{
        if(props.show){
            if(cont === 'character'){
                setElement(
                    <div>
                    <Card>
                        <Card.Img variant='top' src={props.item.image}/>
                        <ListGroup>
                            <ListGroupItem>Name : {props.item.name}  </ListGroupItem>
                            <ListGroupItem>Status : {props.item.status}</ListGroupItem>
                            <ListGroupItem>Gender : {props.item.gender}</ListGroupItem>
                            <ListGroupItem className='path' onClick={handleOrigin}>Origin : {props.item.origin.name}</ListGroupItem>
                            <ListGroupItem className='path' onClick={handleClick}>Location : {props.item.location.name}</ListGroupItem>
                        </ListGroup>                        
                    </Card> 
                    </div>               
                )                
            }
            else if(cont ==='episode'){
                setElement(
                    <div>
                    <Card>
                        <Card.Img variant='top' src="https://img.icons8.com/ios/100/000000/clapperboard.png"/>
                        <ListGroup>
                            <ListGroupItem>Name = {props.item.name}</ListGroupItem>
                            <ListGroupItem>Air-Date = {props.item.air_date}</ListGroupItem>
                            <ListGroupItem>Episode = {props.item.episode}</ListGroupItem>
                        </ListGroup>
                    </Card>
                    </div>
                )
            }
            else{
                setElement(
                    <Card>
                        <Card.Img  src='https://img.icons8.com/pastel-glyph/100/000000/worldwide-location--v1.png'/>
                        <ListGroup>
                            <ListGroupItem>Name={props.item.name}</ListGroupItem>
                            <ListGroupItem>Type={props.item.type}</ListGroupItem>
                            <ListGroupItem>Dimension={props.item.dimension}</ListGroupItem>
                        </ListGroup>
                        </Card>
                )
            }
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[props.content,props.show,props.item]
    );

    return(
        <Modal show={props.show} onHide={handleClose}>
            <Modal.Header closeButton>{props.show ? props.item.name : null}</Modal.Header>                
            <Modal.Body>
            {element}
            {<CardInModal list={props.show ? props.item : null} setPath={setPath} content={cont} setCont={setCont}/>
            }</Modal.Body>          
        </Modal>
    )
}