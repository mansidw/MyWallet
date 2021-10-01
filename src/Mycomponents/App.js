import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Signup from "./Sign/Signup"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./Sign/Login"
import '../css/app.css'


function App() {
  return (
        <Router>
          
          
          
              <Switch> 
                {/* <Route exact path="/" component={Landing} />
                <Route path="/myhome" component={Myhome} /> */}
          
                <div className="outer">
                <div className="inner">
                  
                  <Route exact path="/signup" component={Signup} />
                  <Route exact path="/" component={Login} />
                  <Route exact path="/login" component={Login} />
                </div>
                </div>
                
              </Switch>
          
        </Router>
  )
}

export default App
