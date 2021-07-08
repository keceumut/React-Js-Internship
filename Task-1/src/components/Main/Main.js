import React ,{Component} from 'react';
import './Main.css';
import SearchBox from '../SearchBox/SearchBox.js'

class Main extends Component{
    render(){        
        return (
            <div className = 'main'>
                <h1>Select Country</h1>
                <SearchBox/>
            </div>            
        )
    }    
}

export default Main;