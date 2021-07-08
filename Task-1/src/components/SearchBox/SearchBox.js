import React, {Component } from 'react'
import './SearchBox.css';
import DropMenu from '../DropMenu/DropMenu';
class SearchBox extends Component{
    constructor(props){
        super(props);

        this.state = {
            open : false,
            value : '',
        };

        this.selectCountry = this.selectCountry.bind(this);
    }

    selectCountry(country){
        this.setState({value: country})
    }

    render(){        
        
        return(
            <div>                
                <div className='search-box' id ='display'>{this.state.value && this.state.value}</div>
                {/*drop down arrow with css-only*/}
                <div className = {this.state.open ? 'up-arrow' : 'down-arrow'} onClick = {()=> this.setState({open : !this.state.open})}></div>
                <div className = {this.state.open ? 'open-drop-menu' : 'closed-drop-menu'}>
                <DropMenu open = {this.state.open} selectCountry = {this.selectCountry}/>                
                </div>
            </div>
        
        
        )
    }
}

export default SearchBox;