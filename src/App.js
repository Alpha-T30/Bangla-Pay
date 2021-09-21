import Style from "./app.module.scss";
import { useState, useEffect, useContext } from "react";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Pay from "./Pages/PaymentMethods/Pay";
// import { useDispatch, useSelector } from "react-redux";

 

import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import { AuthContext } from "./ContextApi/UserContaxt/AuthContext";

function App() {
  const {user} = useContext(AuthContext)
  console.log(user)
  
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
