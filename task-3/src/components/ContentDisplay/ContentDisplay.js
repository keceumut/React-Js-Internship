import './ContentDisplay.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import {Row,Col, Container} from 'react-bootstrap';

export default function ContentDisplay(props){
    
    const [data,setData] = useState([]);
    const url= 'https://rickandmortyapi.com/api/' + props.content;
    const [list,setList] = useState([]);
    const [page,setPage] = useState(1);

    
    useEffect(()=>{
        const getData = async () => {
            setData((await axios.get(url)).data.results);         
        }
        getData();
    },[url]
    );
    useEffect(()=>{        
        setList(data.map((data)=><CharacterCard content={props.content} key={data.id} object={data}/>))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data]
    )

    return(
        <div>
        <div className='left-arrow' disabled={page === 1 ? true:false}><div className='line'/></div>
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
        <div className='right-arrow'/>
        </div>
    )
}