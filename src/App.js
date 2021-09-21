import Style from "./app.module.scss";
import { useState, useEffect } from "react";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Pay from "./Pages/PaymentMethods/Pay";

import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";

function App() {
  const user = true ; 
  return (
    <Router>
      <div className={Style.App}>
        <Switch>

          <Route exact path="/">
            {user?<Home></Home> : <Redirect to='/login'> </Redirect> }

          
          </Route>
          <Route path="/login" >
          {!user?<Login></Login> : <Redirect to='/'> </Redirect> }

          </Route>
          
            <Route path='/payment'>
              {user?<Pay></Pay>: <Redirect to='/login'></Redirect>}
          
          </Route>
           
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
