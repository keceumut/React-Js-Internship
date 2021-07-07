import React ,{Component} from 'react';
import './Main.css';
import SearchBox from './SearchBox.js'

class Main extends Component{
    render(){        
        return (
            <div className = 'manin'>
                <h1>Select Country</h1>
                <SearchBox/>
            </div>            
        )
    }    
}

export default Main;