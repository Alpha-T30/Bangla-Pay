import React, { useContext, useRef } from "react";
import Style from "./login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/apiCalls";
import { AuthContext } from "../../ContextApi/UserContaxt/AuthContext";
import { login } from "../../ContextApi/UserContaxt/apiCalls";

export default function Login() {

  // const userInfo= useSelector((state) => state.user?.userInfo);
  // const pending =useSelector((state) => state.user?.pending);
  // const error =useSelector((state) => state.user?.error);


  // const dispatch = useDispatch();

  const { sender:dispatch ,isFeching, error} = useContext(AuthContext);
console.log(error)
  const formRef = useRef();
  const handleSubmit=(e)=>{
    e.preventDefault() ; 
    // console.log(formRef.current[0].value)
    // console.log(formRef.current[1].value)
    // updateUser({userId:formRef.current[0].value, password :formRef.current[1].value}, dispatch)
    login(dispatch,{userId:formRef.current[0].value, password :formRef.current[1].value})

  }
 
 
  return (
    <div className={Style.login}>
      <div className={Style.wrapper}>
        <img src="/Images/logo1.jpg" alt="" />
        
        <form onSubmit={handleSubmit} ref={formRef} >
          <input placeholder="User Id" type="text" name="username" id="username" />
          <input placeholder="Password" type="password" name="password" />
          <button type='submit'>Log In</button>

        </form>
        <div className={Style.promotion}>
            <span>Powered By <a href="https://www.facebook.com">Bangla Pay</a></span>
        </div>
      </div>
    </div>
  );
}
