import './ContentDisplay.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import DisplayTable from '../DisplayTable/DisplayTable';
import CharacterInfo from '../CharacterInfo/CharacterInfo';
export default function ContentDisplay(props){
    
    const [data,setData] = useState([]);
    const [page,setPage] = useState(1);
    const [url,setUrl] = useState(`https://rickandmortyapi.com/api/${props.content}?page=${page}`)
    const [show,setShow] = useState(false);
    const [item,setItem] = useState();

    useEffect(()=>{
        setPage(1);
    },[props.content]
    );
    useEffect(()=>{
        setUrl(`https://rickandmortyapi.com/api/${props.content}?page=${page}&name=${props.subject}`);
    },[page,props.content,props.subject]
    );
    useEffect(()=>{
        const getData = async () => {
            setData((await axios.get(url)).data.results);         
        }
        getData();
    },[url]
    );
    
    function handleClose(){
        setShow(false);
    }
    function nextPage(){
        setPage(page+1);
    }
    function prevPage(){
        setPage(page-1);
    }
    return(
        <div>
        <div className='left-arrow' onClick={prevPage}><div className='line'/></div>
        <DisplayTable 
            content={props.content} 
            data={data} 
            setShow={setShow} 
            setItem={setItem}
        />
        <div className='right-arrow' onClick={nextPage}><div className='line'/></div>
        <CharacterInfo
            show={show}
            handleClose={handleClose}
            item={item}
            content={props.content}
            setItem={setItem}
        />
        </div>
    )
}