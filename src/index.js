import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import Home from './Home';
import Registration from './Registration';
import ProfilePage from './ProfilePage';
import Login from './Login';
import Logout from './Logout';
import Error from './Error'
import history from './history';
//import ImgToBase64 from 'react-native-image-base64';


import { BrowserRouter as Router,

  Route
} from "react-router-dom";
const Data = (
  <Router history={history}>
    <Route path="/" component={App}/>
    <Route path="/error" component={Error}/>
    <Route path="/profile" component={ProfilePage}/>
    <Route path="/home" component={Home}/>
    <Route path="/registration" component={Registration}/>
    <Route path="/login" component={Login}/>
    <Route path="/logout" component={Logout}/>
  </Router>);


ReactDOM.render(Data, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
