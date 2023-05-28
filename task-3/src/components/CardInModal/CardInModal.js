/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import { useEffect, useState } from 'react'
import { ListGroupItem,ListGroup,Image } from 'react-bootstrap';
import './CardInModal.css'

export default function CardInModal(props){

    const [listDisplay,setListDisplay] = useState(null);

    function handleClick(text){
        props.setPath(text);
        props.setModalContent('episode');
    }

    function handleCharacter(text){
        props.setPath(text);
        props.setModalContent('character');
    }

    useEffect(()=>{
        setListDisplay(null);
    },[props.modalContent]);

    useEffect(()=>{
        if(listDisplay===null){

            if(props.modalContent==='character' && props.list !== null){
                props.list.episode.forEach(element=>{
                    const getData=async()=>{
                        let obj=((await axios.get(element)).data);
                        setListDisplay(listDisplay=>
                            [listDisplay,
                            <ListGroupItem onClick={()=>handleClick(obj.url)} key={obj.id}>
                            <div className='ep-name'>{obj.name}</div>
                            <div className='ep-no'>{obj.episode}</div>
                            </ListGroupItem>]
                        )
                    }
                    getData();
                })
            }

            else if(props.modalContent==='episode' && props.list !== null){
                props.list.characters.forEach(element=>{
                    const getData=async()=>{
                        let obj=((await axios.get(element)).data);
                        setListDisplay(listDisplay=>
                            [listDisplay,
                            <ListGroupItem onClick={()=>handleCharacter(obj.url)} key={obj.id}>
                            {obj.name}
                            <Image className='sm-image' src={obj.image}/>
                            </ListGroupItem>]
                        )
                    }
                    getData();
                })
            }

            else if(props.modalContent==='location' && props.list !== null){
                props.list.residents.forEach(element=>{
                    const getData=async()=>{
                        let obj=((await axios.get(element)).data);
                        setListDisplay(listDisplay=>
                            [listDisplay,
                            <ListGroupItem onClick={()=>handleCharacter(obj.url)} key={obj.id}>
                            {obj.name}
                            <Image className='sm-image' src={obj.image}/>
                            </ListGroupItem>]
                        )
                    }
                    getData();
                })
            }

        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.list]);

    return (
        <ListGroup className='small-list'>
            {listDisplay}
        </ListGroup>
    )
}
