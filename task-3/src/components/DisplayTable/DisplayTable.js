import './DisplayTable.css'
import { Container,Row,Col } from 'react-bootstrap'
import CharacterCard from '../CharacterCard/CharacterCard'
import { useEffect,useState } from 'react';

export default function DisplayTable(props){

    const [list,setList] = useState([]);

    useEffect(()=>{        
        setList(props.data.map((data)=><CharacterCard content={props.content} key={data.id} object={data} setShow={props.setShow} setItem={props.setItem}/>))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.data]);

    return(
        <Container>
            <Row lg={5} md={4} sm={3} xs={2}>
                {list.map(item =>{
                    return <Col>{item}</Col>
                })}
            </Row>
        </Container>
    )
}