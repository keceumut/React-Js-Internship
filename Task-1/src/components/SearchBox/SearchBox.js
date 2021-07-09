import React, {useState } from 'react'
import './SearchBox.css';
import DropMenu from '../DropMenu/DropMenu';

function SearchBox(){

    const [open,setOpen] = useState(false);
    const [value,setValue] = useState('');   
        
        return(
            <div>                
                <div className='search-box' id ='display'>{value && value }</div>
                {/*drop down arrow with css-only*/}
                <div className = {open ? 'up-arrow' : 'down-arrow'} onClick = {()=> setOpen({open : !open})}></div>
                <div className = {open ? 'open-drop-menu' : 'closed-drop-menu'}>
                <DropMenu open = {open} setValue = {setValue}/>                
                </div>
            </div>      
        )
}

export default SearchBox;