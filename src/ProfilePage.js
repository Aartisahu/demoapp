import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './App.css';
import { Redirect } from 'react-router-dom';

class ProfilePage extends Component {
  constructor(){
    super()
    this.state={
      update:true,
    }
  }
  handleClick=()=>{
    this.setState({
      update:false,
    })
  }
  
  render() {
    if (Boolean(this.props.location.state)) {
      const { file,email, phone_Number, address} = this.props.location.state
      const retrievedObject1 = localStorage.getItem('file');
      const retrievedObject2 = localStorage.getItem('name');
      const retrievedObject3 = localStorage.getItem('email');
      const retrievedObject4 = localStorage.getItem('phone_Number');
      const retrievedObject5= localStorage.getItem('address');
      if(this.state.update){
      return (
        <div>
          
          <Button onClick={this.handleClick}>Edit profile</Button>
          <center>
            <h3 className="center">WELCOME TO MY PAGE</h3><br></br>
           
            <img className="circular" src={retrievedObject1} alt=""/><br></br>  
            Name:<h5>{retrievedObject2}</h5>
            Email:<h5>{retrievedObject3}</h5>
            Phone:<h5>{retrievedObject4}</h5>
            Address:<h5>{retrievedObject5}</h5>
          </center>
        </div>
      );}else{
        return <Redirect to={{pathname:"/registration", state: this.props.location.state}}/>
      }
    } else {
      return <Redirect to='/login'/>
    }
  }

}

export default ProfilePage;

