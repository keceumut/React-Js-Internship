import './ContentDisplay.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import DisplayTable from '../DisplayTable/DisplayTable';
import CharacterInfo from '../CharacterInfo/CharacterInfo';
import { Button } from 'react-bootstrap';

export default function ContentDisplay(props){
    
    const [data,setData] = useState([]);
    const [currentPage,setcurrentPage] = useState(1);
    const [show,setShow] = useState(false);
    const [item,setItem] = useState();
    const [maxPage,setmaxPage] =useState();
    const [url,setUrl] = useState(`https://rickandmortyapi.com/api/${props.content}?page=${currentPage}`)

    useEffect(()=>{
        setcurrentPage(1);
    },[props.content]);

    useEffect(()=>{
        setUrl(`https://rickandmortyapi.com/api/${props.content}?page=${currentPage}&name=${props.subject}`);
    },[currentPage,props.content,props.subject]);

    useEffect(()=>{
        const getData = async () => {
            let obj = (await axios.get(url)).data;
            setData(obj.results);  
            setmaxPage(obj.info.pages);     
        }
        getData();
    },[url]);
    
    return(
        <div>
            <Button className='left-arrow' disabled={currentPage === 1 ? true : false} onClick={()=>setcurrentPage(currentPage-1)}><div className='line'/></Button>
            <DisplayTable 
                content={props.content} 
                data={data} 
                setShow={setShow} 
                setItem={setItem}
            />
            <Button className='right-arrow' disabled={currentPage === maxPage ? true:false} onClick={()=>setcurrentPage(currentPage+1)}><div className='line'/></Button>
            <CharacterInfo
                show={show}
                handleClose={()=>setShow(false)}
                item={item}
                content={props.content}
                setItem={setItem}
            />
        </div>
    )
}