import './CharacterInfo.css'
import { Modal,Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardInModal from '../CardInModal/CardInModal';

export default function CharacterInfo(props){

    const [path,setPath] = useState('');
    const [modalDisplay,setModalDisplay] = useState();
    const [modalContent,setModalContent]= useState(props.content);

    function handleClose(){
        props.handleClose();
        setModalContent(props.content);
        setPath('');
    }

    function handleClick(url){
        setPath(url);
        setModalContent('location');
    }

    useEffect(()=>{
        const getData = async ()=>{
            props.setItem((await axios.get(path)).data)
        }
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[path]);

    useEffect(()=>{
        setModalContent(props.content);
    },[props.content]);

    useEffect(()=>{

        if(props.show){

            if(modalContent === 'character'){
                setModalDisplay(
                    <Card>
                        <Card.Img variant='top' src={props.item.image}/>
                        <ListGroup>
                            <ListGroupItem>Name : {props.item.name}  </ListGroupItem>
                            <ListGroupItem>Status : {props.item.status}</ListGroupItem>
                            <ListGroupItem>Gender : {props.item.gender}</ListGroupItem>
                            <ListGroupItem className='path' onClick={()=>handleClick(props.item.origin.url)}>Origin : {props.item.origin.name}</ListGroupItem>
                            <ListGroupItem className='path' onClick={()=>handleClick(props.item.location.url)}>Location : {props.item.location.name}</ListGroupItem>
                        </ListGroup>                        
                    </Card>               
                )                
            }

            else if(modalContent ==='episode'){
                setModalDisplay(
                    <Card>
                        <Card.Img variant='top' src="https://img.icons8.com/ios/100/000000/clapperboard.png"/>
                        <ListGroup>
                            <ListGroupItem>Name = {props.item.name}</ListGroupItem>
                            <ListGroupItem>Air-Date = {props.item.air_date}</ListGroupItem>
                            <ListGroupItem>Episode = {props.item.episode}</ListGroupItem>
                        </ListGroup>
                    </Card>
                )
            }

            else{
                setModalDisplay(
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
    },[props.content,props.show,props.item]);

    return(
        <Modal show={props.show} onHide={handleClose}>
            <Modal.Header closeButton>{props.show ? props.item.name : null}</Modal.Header>               
            <Modal.Body>
                {modalDisplay}
                <CardInModal list={props.show ? props.item : null} setPath={setPath} modalContent={modalContent} setModalContent={setModalContent}/>
            </Modal.Body>          
        </Modal>
    )
}