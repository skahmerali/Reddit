import React from 'react';
import ReactDOM from 'react-dom';


import Reddit from "./components/dashbord/dashbord"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"



import Login from "./components/login/login"
 function Index() {
return(

  <div>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link  to="/">LOGIN</Link>
            </li>
            <li>
              <Link  to="/Dashbord">Dashbord</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/Dashbord">
            <Reddit />
          </Route>
        </Switch>
      </div>
    </Router>

     {/* <Login />
    <Reddit /> */}
   </div>
   
   )
 }

ReactDOM.render(<Index />,document.getElementById("root"))
