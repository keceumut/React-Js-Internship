import React, { useState } from 'react'
import './List.css';

function List(props){   
                 
        var listCountrys = props.countries.map((countries)=> <CountryListItem value ={countries} key ={countries} setCountry={props.setCountry}/>);

        return(            
            <ul className = {props.open ? 'opened-list': 'closed-list'}>{listCountrys}</ul>
        )
    
}

function CountryListItem(props){
    
    const[value,setValue] = useState(props.value);    

    function handleClick(event){
        setValue(props.value)
        setTimeout(selectCountry,1);        
    }

    function selectCountry(){
       props.setCountry(value);
    }
    
        return(
            <li className ='list' value = {props.value} onClick = {handleClick}>{props.value}</li>
        )
    

}


export default List;