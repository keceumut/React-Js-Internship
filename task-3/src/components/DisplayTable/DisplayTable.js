import './DisplayTable.css'
import { Container,Row,Col } from 'react-bootstrap'
import CharacterCard from '../CharacterCard/CharacterCard'
import { useEffect,useState } from 'react';
export default function DisplayTable(props){

    const [list,setList] = useState([]);

    useEffect(()=>{        
        setList(props.data.map((data)=><CharacterCard content={props.content} key={data.id} object={data} setShow={props.setShow} setItem={props.setItem}/>))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.data]
    );

    return(
        <Container>
        <Row lg={5} md={4} sm={3} xs={2}>
            <Col>{list[0]}</Col>
            <Col>{list[1]}</Col>
            <Col>{list[2]}</Col>
            <Col>{list[3]}</Col>
            <Col>{list[4]}</Col>
            <Col>{list[5]}</Col>
            <Col>{list[6]}</Col>
            <Col>{list[7]}</Col>
            <Col>{list[8]}</Col>
            <Col>{list[9]}</Col>
            <Col>{list[10]}</Col>
            <Col>{list[11]}</Col>
            <Col>{list[12]}</Col>
            <Col>{list[13]}</Col>
            <Col>{list[14]}</Col>
            <Col>{list[15]}</Col>
            <Col>{list[16]}</Col>
            <Col>{list[17]}</Col>
            <Col>{list[18]}</Col>
            <Col>{list[19]}</Col>
        </Row>
        </Container>
    )
}