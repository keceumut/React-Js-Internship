import React, { Component } from 'react'
import './DropMenu.css';
import Countries from './Countries.json';
import List from './List.js';
class DropMenu extends Component{     
    constructor(props){
        super(props);
        this.state = {
            value : '',
            countries : Countries,
        };
        this.findCountry = this.findCountry.bind(this);
        this.handleclick = this.handleclick.bind(this);
    }
    handleclick(event){
        this.setState({value : event.target.value});
        setTimeout(this.findCountry,1);    
    }    
    findCountry(){    
        this.setState({countries : Countries,value : this.state.value.charAt(0).toUpperCase() + this.state.value.slice(1)});
        let newList =[];    
        for(let i=0;i<this.state.countries.length;i++){                      
            if(this.state.countries[i].includes(this.state.value)) {
                newList.push(this.state.countries[i]);                
            }
        }
        this.setState({countries : newList});
        this.render();
    }    
    render(){         
        return(
            <div>
                <input  className = {this.props.open ? 'open-input' : 'closed-input' } type='text' value = {this.state.value}
                onChange = {this.handleclick}/>
                <List countries = {this.state.countries} open = {this.props.open}/>
            </div>            
        )
    }
}
export default DropMenu;