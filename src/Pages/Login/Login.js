import React, { useContext, useRef } from "react";
import Style from "./login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/apiCalls";
import { AuthContext } from "../../ContextApi/UserContaxt/AuthContext";
import { login } from "../../ContextApi/UserContaxt/apiCalls";
import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {

  // const userInfo= useSelector((state) => state.user?.userInfo);
  // const pending =useSelector((state) => state.user?.pending);
  // const error =useSelector((state) => state.user?.error);


  // const dispatch = useDispatch();

  const { sender:dispatch ,isFetching, error} = useContext(AuthContext);
console.log(isFetching)
  const formRef = useRef();
  const handleSubmit=(e)=>{
    e.preventDefault() ; 
    // console.log(formRef.current[0].value)
    // console.log(formRef.current[1].value)
    // updateUser({userId:formRef.current[0].value, password :formRef.current[1].value}, dispatch)
    login(dispatch,{userId:formRef.current[0].value, password :formRef.current[1].value})

  }
 
  return (
    !isFetching?
    <div className={Style.login}>
      <div className={Style.wrapper}>
        <img src="/Images/logo1.jpg" alt="" />
        
        <form onSubmit={handleSubmit} ref={formRef} >
          <input placeholder="User Id" type="text" name="username" id="username" />
          <input placeholder="Password" type="password" name="password" />
          <button  type='submit'>Log In</button>

        </form>
        <div className={Style.promotion}>
            <span>Powered By <a href="https://www.facebook.com">Bangla Pay</a></span>
        </div>
      </div>
    </div> :  (
      <div className={Style.isFetching}>
      
      <div class="divLoader">
      <p>Logging In ....</p>
      <svg class="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
        <path ng-attr-d="{{config.pathCmd}}" ng-attr-fill="{{config.color}}" stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#51CACC" transform="rotate(179.719 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
      </svg>
      <button onClick={()=>window.location.reload()}>Try Again</button>
    </div>
      </div>
    )
  )  
  
}
