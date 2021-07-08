import React, { Component } from 'react'
import './List.css';

class List extends Component{     
    render(){               
        var listCountrys = this.props.countries.map((countries)=> <CountryListItem value ={countries} key ={countries} selectCountry={this.props.selectCountry}/>);
        return(            
            <ul className = {this.props.open ? 'opened-list': 'closed-list'}>{listCountrys}</ul>
        )
    }
}

class CountryListItem extends Component{
    constructor(props){
        super(props);

        this.state ={
            value: '',            
        };

        this.handleClick = this.handleClick.bind(this);  
        this.selectCountry = this.selectCountry.bind(this);      
    } 

    handleClick(event){
        this.setState({value : this.props.value});
        setTimeout(this.selectCountry,1);        
    }

    selectCountry(){
        this.props.selectCountry(this.state.value);
    }

    render(){
        return(
            <li className ='list' value = {this.props.value} onClick = {this.handleClick}>{this.props.value}</li>
        )
    }

}


export default List;