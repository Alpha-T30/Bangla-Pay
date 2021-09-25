import React, { useContext, useEffect, useRef, useState } from "react";
import Style from "./login.module.scss";
import { AuthContext } from "../../ContextApi/UserContaxt/AuthContext";
import { login } from "../../ContextApi/UserContaxt/apiCalls";
import axios from "axios";

export default function Login() {

  
const[isServerOk , setServerStatus]= useState(true); 
useEffect(()=>{
  const check = async ()=>{
    try {
      const  res = await axios.get("http://localhost:5000/check")
      
      
    } catch (error) {
      setServerStatus(false)
      
    }

  }
  check()
},[])

  const { sender:dispatch ,isFetching, error} = useContext(AuthContext);
  console.log("the error:",error)
 
  const formRef = useRef();
  const handleSubmit=(e)=>{
    e.preventDefault() ; 
    
    login(dispatch,{userId:formRef.current[0].value, password :formRef.current[1].value})

  }
 
  return (
    !isServerOk?
    (<>

      <div className={Style.isFetching}>
      <span>Server Down Contact with</span>
        <a href="banglapay.com">Bangla Pay</a> 
        <span>Or</span>
        <button onClick={()=>window.location.reload()}>Try Again</button>
        </div>
       </> ):
    (

      (!isFetching && !error)?
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
    </div> : (isFetching && !error)?(
      <div className={Style.isFetching}>
      
      <div className={Style.divLoader}>
      <p>Logging In ....</p>
      <svg  className={Style.svgLoader} viewBox="0 0 100 100" width="10em" height="10em">
        <path ng-attr-d="{{config.pathCmd}}" ng-attr-fill="{{config.color}}" stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#51CACC" transform="rotate(179.719 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
      </svg>
    </div>
      </div>
    ): (!isFetching && error) && (<div className={Style.isFetching}> <span>Wrong Username or Password</span>
      <button onClick={()=>window.location.reload()}>Try Again</button>

    </div>)
  )  
  
  )
  
}
