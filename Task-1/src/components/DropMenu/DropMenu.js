import React, { useEffect, useState } from 'react'
import './DropMenu.css';
import Countries from '../../data/Countries.json';
import List from '../List/List.js';

function DropMenu(props){     

    
    const [value,setValue] = useState('');
    const [countries,setCountries] = useState(Countries);    
    
    function handleclick(targetValue){  
        setValue(targetValue)  ;  
        setValue(targetValue + '');
        //setValue(targetValue);
        console.log(targetValue);
        
        setTimeout(findCountry,10);    
    } 
    /*
    useEffect(()=> {
        console.log(value);
    }
    
    )*/
    function findCountry(){  
        
        let newList =[]; 

        setCountries(Countries);
        //setValue(value.charAt(0).toUpperCase() + value.slice(1));
        console.log(value);
        for(let i=0;i<countries.length;i++){     

            if(countries[i].includes(value)) {
                newList.push(countries[i]);                
            }

        }
        //console.log(newList);
        setCountries(newList);
        
    } 

        return(
            <div>
                <input  
                    className = {props.open ? 'open-input' : 'closed-input' } 
                    type='text' 
                    value={value}
                    onInput = {e=> handleclick(e.target.value)}                        
                    />
                <List countries = {countries} open = {props.open} setCountry = {props.setValue}/>
            </div>            
        )

}
export default DropMenu;