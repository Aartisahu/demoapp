import React,{Component} from "react";
class Logout extends Component {
  
componentDidMount(){
  localStorage.clear();
  window.location.href = '/home';
  }
 render(){
    return(
      <div>
      </div>
    )
  }
}
export default Logout
