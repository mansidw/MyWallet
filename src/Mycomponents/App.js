import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Signup from "./Sign/Signup"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./Sign/Login"
import Myhome from "./My Profile/Myhome"
import Landing from "./Basics/Landing"
import AboutUs from "./Basics/AboutUs";
import '../css/app.css'


function App() {
  return (
        <Router>
          
          
          
              <Switch> 
                <Route exact path="/" component={Landing} />
                <Route path="/myhome" component={Myhome} />
          
                <div className="outer">
                <div className="inner">
                  
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  
                </div>
                </div>
                
              </Switch>
          
        </Router>
  )
}

export default App
