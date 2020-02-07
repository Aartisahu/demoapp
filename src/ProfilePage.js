import React, {Component} from 'react';
import './App.css';
import './profile.css';
import { Redirect } from 'react-router-dom';

class ProfilePage extends Component {
  constructor(){
    super()
    this.state={
      id:"",
      currentUser:{},
      update:true,
    }
  }
  handleClick=()=>{
    this.setState({
      update:false,
    })
  }
  componentDidMount(){
    const _id = {_id:localStorage.getItem('_id')};
    fetch('http://localhost:8081/details', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(_id)
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      this.setState({currentUser: data})
    });
  }
  render() {
    const isLogin=localStorage.getItem('you_logedin');
    if (Boolean(isLogin)) {
      if(this.state.update){ 
      return (
        <center>
          <div>
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-sm-6">
                  <div class="card hovercard">
                    <div class="cardheader"></div>
                      
                    <div class="avatar">
                      <img src={this.state.currentUser.file} alt=""/><br></br> 
                    </div>
                    <div class="info">
                      <div class="title">
                        <h3 className="center">WELCOME <br></br>{this.state.currentUser.name}</h3>
                      </div>
                    </div> 
                    DETAILS:-
                    <div class="desc">{this.state.currentUser.email}</div>
                    <div class="desc">{this.state.currentUser.phone_Number}</div>
                    <div class="desc">{this.state.currentUser.address}</div>
                    </div> 
                    <button onClick={this.handleClick}>Edit profile</button>
                  </div>
                </div>
              </div>
            </div>
        </center>
      );}
      else{
        return <Redirect to={{pathname:"/registration",}}/>
      }
    } else {
      return <Redirect to='/login'/>
    }
  }

}

export default ProfilePage;

