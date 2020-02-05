import React,{Component} from 'react';
import moment from 'moment';
import Login from './Login';
import ReactFileReader from 'react-file-reader';

class Registration extends Component{
  constructor(){
    super()
    this.state={
      file:"",
      name:"",
      phone_Number:"",
      email:"",
      address:"",
      dateOfBirth:"",
      security_Question:"",
      security_Answer:""
    }
  }
  componentDidMount=()=>{
    if (Boolean(this.props.location.state)) {
      const {file,name, email, phone_Number, address, password, dateOfBirth, security_Question, security_Answer } = this.props.location.state
      this.setState({name, email, phone_Number, address, password, dateOfBirth, security_Question, security_Answer});
    }
  }
  initialState=() =>{
    this.setState({
      file:"",
      name:"",
      phone_Number:"",
      email:"",
      password:"",
      address:"",
      dateOfBirth:"",
      security_Question:"",
      security_Answer:""
    })
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
 
  handleClick=(event)=>{
    event.preventDefault();
    const newRegister = {
      file:this.state.file,
      name:this.state.name,
      phone_Number: this.state.phone_Number,
      address : this.state.address,
      email: this.state.email,
      password:this.state.password,
      dateOfBirth: this.state.dateOfBirth,
      security_Question:this.state.security_Question,
      security_Answer: this.state.security_Answer,
    }
    fetch('http://localhost:8081/registration',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newRegister)
    })
    .then(response =>  {
      if (response.status === 200) {
        alert("Registration Successfull");
        return response.json()
      }else{
        alert("please register again")
      }
    })
    this.initialState();

  }
  update=()=>{
    window.location.href = '/profile';
  }

  handleClickSelect = (event) => {
    this.setState({
      security_Question: event.target.value
    })
  }

  handleFiles = files => {
    console.log(files)
    this.setState({
      file: files.base64
    })
    console.log(this.state.file)
  }


  handleClickUpdate=(event)=>{
    event.preventDefault();
    const newRegister = {
      file:this.state.file,
      name:this.state.name,
      phone_Number: this.state.phone_Number,
      address : this.state.address,
      email: this.state.email,
      password:this.state.password,
      dateOfBirth: this.state.dateOfBirth,
      security_Question:this.state.security_Question,
      security_Answer: this.state.security_Answer
    }
    console.log("Demo", newRegister)
    fetch('http://localhost:8081/updateProfile',{
      method: 'PUT',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newRegister)
    })
    .then(response =>  {
      if (response.status === 200) {
        return response.json()
      }else{
        alert("please try again")
      }
    })
    this.initialState();
  }
  render(){
    if (Boolean(this.props.location.state)) {
      
    return(
      <div>
        <center>
          <form onSubmit={(event) => this.handleClickUpdate(event)}>
            <h2> USER REGISTRATION</h2><br></br>
            <img  className='circular' src={this.state.file} alt="" /><br></br>
            <ReactFileReader handleFiles={this.handleFiles} base64={true}>
                      Upload_Image
               </ReactFileReader><br></br>
            NAME:<input  className="name" type="text" name="name" value={this.state.name} required onChange={this.handleChange}/><br></br><br></br>
            PHONE_NUMBER:<input  className="phone" type="number" name="phone_Number" value={this.state.phone_Number} required  onChange={this.handleChange}/><br></br><br></br>
            ADDRESS<input  className="address" type="text" name="address" value={this.state.address} required  onChange={this.handleChange}/><br></br><br></br>
            EMAIL:<input  className="email" type="email" name="email"  value={this.state.email} required  onChange={this.handleChange}/><br></br><br></br>
            PASSWORD:<input  className="password" type="password" name="password"  value={this.state.password} required  onChange={this.handleChange}/><br></br><br></br>
            DATE_OF_BIRTH:<input  className="date" type="date" name="dateOfBirth" value={moment(this.state.dateOfBirth).format("YYYY-MM-DD")} required  onChange={this.handleChange}/><br></br><br></br>
            SECURITY QUESTION: <select className="security" defaultValue={this.state.security_Question} onClick={(event)=>this.handleClickSelect(event)}>
                                <option value="what is your favorite color">what is your favorite color</option>
                                <option value="what is your favorite fruit">what is your favorite fruit</option>
                                <option value="what is your favorite place">what is your favorite place</option>
                              </select><br></br>
            <input  className="answer" type="text" name="security_Answer" value={this.state.security_Answer} required  onChange={this.handleChange}/><br></br><br></br>
            <button type="submit">update</button>
            
          </form>
        </center>
      </div>
    )}else{
      return(
        <div>
          <center>
            <form onSubmit={(event) => this.handleClick(event)}>
              <h2> USER REGISTRATION</h2><br></br>
              <img  className='circular' src={this.state.file} alt=""/><br></br>
              <ReactFileReader handleFiles={this.handleFiles} base64={true}>
                Upload_Image Here
               </ReactFileReader><br></br>
              NAME:<input className="name" type="text" required name="name" value={this.state.name} onChange={this.handleChange}/><br></br><br></br>
              PHONE_NUMBER:<input  className="phone" type="number" required name="phone_Number" value={this.state.phone_Number} onChange={this.handleChange}/><br></br><br></br>
              ADDRESS<input  className="address" type="text" name="address" required value={this.state.address} onChange={this.handleChange}/><br></br><br></br>
              EMAIL:<input  className="email" type="email" name="email" required value={this.state.email} onChange={this.handleChange}/><br></br><br></br>
              PASSWORD:<input  className="password" type="text" name="password" required value={this.state.password} onChange={this.handleChange}/><br></br><br></br>
              DATE_OF_BIRTH:<input  className="date" type="date" name="dateOfBirth" required value={moment(this.state.dateOfBirth).format("YYYY-MM-DD")} onChange={this.handleChange}/><br></br><br></br>
              SECURITY QUESTION:<select className="security" Value={this.state.security_Question} onClick={(event)=>this.handleClickSelect(event)}> 
                                  <option value=" what is your favorite color"> what is your favorite color</option>
                                  <option value="what is your favorite fruit"> what is your favorite fruit</option>
                                  <option value="what is your favorite place"> what is your favorite place</option>
                                </select><br></br><br></br>
              ANSWER:<input  className="answer" type="text" name="security_Answer" required value={this.state.security_Answer} onChange={this.handleChange}/><br></br><br></br>
              <button type="submit">SUBMIT</button>
            </form>
          </center>
        </div>
      )
    }
  }
}

export default Registration;


















