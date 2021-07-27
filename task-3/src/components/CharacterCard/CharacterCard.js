import { useState,useEffect } from 'react'
import { Card } from 'react-bootstrap'
//import CharacterInfo from '../CharacterInfo/CharacterInfo';
import './CharacterCard.css'

export default function CharacterCard(props){

    const [imgsrc,setImgSrc] = useState(null);
    useEffect(() => {
        if(props.content === 'character'){
            setImgSrc(props.object.image);
        }
        else if(props.content === 'episode'){
            setImgSrc("https://img.icons8.com/ios/100/000000/clapperboard.png");
        }
        else{
            setImgSrc("https://img.icons8.com/pastel-glyph/100/000000/worldwide-location--v1.png");
        }
    }, [props])
    
    function handleClick(){
        props.setShow(true);
        props.setItem(props.object);
    }
    return(
        <div>
        <Card onClick={handleClick}>
            <Card.Img variant='top' src={imgsrc}/>
            <Card.Text>
                {props.object.name}
            </Card.Text>
        </Card>
        </div>
    )
}