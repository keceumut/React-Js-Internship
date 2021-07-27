/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import { useEffect, useState } from 'react'
import { ListGroupItem,ListGroup } from 'react-bootstrap';
import './CardInModal.css'

export default function CardInModal(props){

    const [element,setElement] = useState('');
    
    function handleClick(text){
        props.setPath(text);
        props.setCont('episode');
    }

    function handleCharacter(text){
        props.setPath(text);
        props.setCont('character');
    }

    useEffect(()=>{   
            props.list.forEach(thing => {
            const getData = async ()=>{
                let obj = ((await axios.get(thing)).data);
                if(props.content === 'character'){
                    setElement(
                        element=>[element,
                        <ListGroupItem onClick={()=>handleClick(obj.url)} key={obj.id}>
                        <div className='ep-name'>{obj.name}</div>
                        <div className='ep-no'>{obj.episode}</div>
                        </ListGroupItem>
                        ]
                    )
                }  
                else if(props.content === 'episode'){
                    setElement(
                        element=>[element,
                        <ListGroupItem onClick={()=>handleCharacter(obj.url)} key={obj.id}>
                            {obj.name}
                            <img className='sm-image' src={obj.image}/>
                        </ListGroupItem>
                        ]
                    )
                }             
                else{
                    setElement(
                        element=>[element,
                        <ListGroupItem onClick={()=>handleCharacter(obj.url)} key={obj.id}>
                            {obj.name}
                            <img className='sm-image' src={obj.image}/>
                        </ListGroupItem>
                        ]
                    )
                }            
            }
            getData();
        });
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.list]
    );
    return (
        <ListGroup className='small-list'>
            {element}
        </ListGroup>
        
    )
}
