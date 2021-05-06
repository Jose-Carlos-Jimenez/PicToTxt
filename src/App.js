import React, {useContext, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import logo from "./notes-icon.png";
import Home from './components/home.component';

import { GrPowerShutdown } from "react-icons/gr";
import 'react-tiny-fab/dist/styles.css';


function App() {
  const [show, setShow] = useState(false);
  let history = useHistory();

  function logout(e){
    history.push("");
    setShow(false);
    global.username="";
  }

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <img src={logo} width="40" height="40" alt="logo"/>
            <Link className="navbar-brand" to={"/sign-in"}>Pic.Txt</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                { !show?
                ( <div>
                    <li className="nav-item">
                      <Link to={"/sign-in"}>Iniciar sesión</Link>
                    </li>
                    <li className="nav-item">
                      <Link  to={"/sign-up"}>Registrarse</Link>
                    </li>
                  </div>):
                (
                  <div>
                    <h4>{global.username}</h4>
                    <button  type="button" className="btn-circle btn-danger" onClick={logout} ><GrPowerShutdown/></button>
                  </div>                  
                )
                }
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          { !show?
            (<div className="auth-inner" >
              <Switch>
                <Route exact path='/' component={Login} />
                <Route path="/sign-in" render={(props)=>(<Login {...props} show={setShow} ></Login>)}/>
                <Route path="/sign-up" component={SignUp} />
              </Switch>
            </div>):
            (<div className="auth-inner-width">
              <Switch>
                <Route path="/home" component={Home}></Route>
              </Switch>
            </div>
            )
          }
        </div>
      </div>
    </Router>
    
  );
}

export default App;