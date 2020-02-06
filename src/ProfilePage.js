import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './App.css';
import { Redirect } from 'react-router-dom';

class ProfilePage extends Component {
  constructor(){
    super()
    this.state={
      currentUser:{file:"",
      name:"",
      phone_Number:"",
      email:"",
      address:"",
      dateOfBirth:"",
      security_Question:"",
      security_Answer:"",
      password:""},
      update:true,
    }
  }
  handleClick=()=>{
    this.setState({
      update:false,
    })
  }
  componentDidMount(){
    fetch('http://localhost:8081/details', {
      method: "GET",
      dataType: "JSON",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      debugger
      this.setState({currentUser: data})
    });
  }
  render() {
    const _id = localStorage.getItem('_id');
    const isLogin=localStorage.getItem('you_logedin');
    const file = localStorage.getItem('file');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const phone_Number = localStorage.getItem('phone_Number');
    const address= localStorage.getItem('address');
    if (Boolean(isLogin)) {
     
      if(this.state.update){
        
      return (
        <div>
          <Button onClick={this.handleClick}>Edit profile</Button>
          <center className="center">
          <h3 className="center">welcome to my page{}</h3>
            <h3 className="center">WELCOME <br></br>{name}</h3>
            <img className="circular" src={file} alt=""/><br></br>  
            DETAILS:-
            <h5 >EMAIL:-&nbsp;&nbsp;{email}</h5>
            <h5>MOBILE_NO:-&nbsp;&nbsp;{phone_Number}</h5>
            <h5>ADDRESS:-&nbsp;&nbsp;{address}</h5>
          </center>
        </div>
      );}else{
        return <Redirect to={{pathname:"/registration", _id}}/>
      }
    } else {
      return <Redirect to='/login'/>
    }
  }

}

export default ProfilePage;

