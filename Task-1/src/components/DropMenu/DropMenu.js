import React, { useEffect, useState } from 'react'
import './DropMenu.css';
import Countries from '../../data/Countries.json';
import List from '../List/List.js';

function DropMenu(props){   
    
    const [value,setValue] = useState('');
    const [countries,setCountries] = useState(Countries);    
    
    function handleclick(targetValue){  
        setValue(targetValue.charAt(0).toUpperCase() + targetValue.slice(1))  ;  
        setCountries(Countries);      
    } 
    
    useEffect((value)=> {
        findCountry();    
    },[value]
    );

    function findCountry(){  
        
        let newList =[]; 

        for(let i=0;i<countries.length;i++){     

            if(countries[i].includes(value)) {
                newList.push(countries[i]);                
            }

        }
        setCountries(newList);
        
    } 

        return(
            <div>
                <input  
                    className = {props.open ? 'open-input' : 'closed-input' } 
                    type='text' 
                    value={value}
                    onChange = {e=> handleclick(e.target.value)}                        
                    />
                <List countries = {countries} open = {props.open} setCountry = {props.setValue}/>
            </div>            
        )

}
export default DropMenu;