import React from "react";
import Style from "./login.module.scss";

export default function Login() {
  return (
    <div className={Style.login}>
      <div className={Style.wrapper}>
        <img src="/Images/logo1.jpg" alt="" />
        
        <form >
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
