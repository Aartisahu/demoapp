import React,{Component} from "react";
import {Button} from 'react-bootstrap';
import './App.css';

class Logout extends Component {
  
    
  logout(){
    localStorage.clear();
    window.location.href = '/home';
  }
render(){
  return(
    <div>
      <Button onClick={this.logout}>logout</Button>
    </div>
  )
  
}









}
export default Logout
