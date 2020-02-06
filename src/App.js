import React,{Component} from 'react';
import {Nav} from 'react-bootstrap';
import './App.css';

class App extends Component {
  
  render(){
    const isLogin=localStorage.getItem('you_logedin');
    if(!isLogin){
      return (
        <div>
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="link-1" href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3" href="/registration">
                Registration
              </Nav.Link></Nav.Item>
              <Nav.Item>
              <Nav.Link eventKey="link-4" href="/login">
                login
              </Nav.Link>
            </Nav.Item>
            
          </Nav>
        </div>
      )
    }else{
      return (
        <div>
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="link-1" href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" href="/profile">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3" href="/logout">logout</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      )
    }
  }
}
export default App;
