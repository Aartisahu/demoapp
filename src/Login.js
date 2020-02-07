import React,{Component} from "react";
import { Redirect } from "react-router-dom";
import './App.css';
class Login extends Component {
  constructor(){
    super()
    this.state={
      invalid:false,
      password:"",
      email:"",
      isAuthenticated:[],
      loginSuccess: false,
      user: null
    }
  }
  invalidCheck=()=>{
    this.setState({
      invalid:true
    })
  }
  initialState=()=>{
   this.setState({
    password:"",
    email:""
   })
  }
  handleChange=(e) =>{
    this.setState({[e.target.name]: e.target.value})
  }
  handleClick=(event)=>{
    event.preventDefault();
    const info = {
      email:this.state.email,
      password:this.state.password,
    }
    fetch('http://localhost:8081/login' ,{
      method:'POST',
      dataType: "JSON",
      headers: {
      "Content-Type": "application/json",
      },
      body : JSON.stringify(info)
    })
      .then(res => {
        if (res.status === 200) {
          res.json().then(responseJSON => {
            localStorage.setItem('_id', responseJSON._id);
            localStorage.setItem('file', responseJSON.file);
            localStorage.setItem('email', responseJSON.email);
            localStorage.setItem('name', responseJSON.name);
            localStorage.setItem('phone_Number', responseJSON.phone_Number);
            localStorage.setItem('address', responseJSON.address); 
            localStorage.setItem('password', responseJSON.password);
            localStorage.setItem('dateOfBirth', responseJSON.dateOfBirth);
            localStorage.setItem('security_Question', responseJSON.security_Question);
            localStorage.setItem('security_Answer', responseJSON.security_Answer);
            localStorage.setItem('you_logedin',true);
            this.setState({});
          });
        } else if(res.status === 404) {
          this.invalidCheck()
        }
      })
      this.initialState()
  }
  render(){
    const isLogin=localStorage.getItem('you_logedin');
    if(this.state.invalid){
      return (
        <div>
      <center className="center1">
        <h3>User Login</h3><br></br>
        <form onSubmit={this.handleClick}>
          email:<input className="login" required type="email" name='email'value={this.state.email} onChange={this.handleChange}/><br></br><br></br>
          password:<input required type="password" name='password'value={this.state.password} onChange={this.handleChange}/><br></br><br></br>
          <h6 className="message">invalid email or password</h6>
          <button className="login" type='submit'>Login</button>
        </form>
      </center>
    </div>
      )}
    if (!Boolean(isLogin)) {
        return (
          <div>
            <center className="center1">
              <h3>User Login</h3><br></br>
              <form onSubmit={this.handleClick}>
                email:<input className="login" required type="email" name='email'value={this.state.email} onChange={this.handleChange}/><br></br><br></br>
                password:<input required type="password" name='password'value={this.state.password} onChange={this.handleChange}/><br></br><br></br>
                <button className="login" type='submit'>Login</button>
              </form>
            </center>
          </div>
        )
      
      } else {
      return <div>
        <Redirect to={{pathname:"/profile"}} />
      </div>
    }
  
  }
}
export default Login;