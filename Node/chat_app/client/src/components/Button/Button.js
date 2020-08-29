import React,{Component} from 'react';
import './Button.css';
class Button extends Component{
  
    render(){
        return(
          
            <form className="form">
            <input className="input" type="text" placeholder="Type a text..."></input>
            <button className="sendButton">SEND</button>
        </form>
        )
    }
    
}
export default Button;