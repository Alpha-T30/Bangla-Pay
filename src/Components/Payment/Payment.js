import React from "react";
import Style from "./payment.module.scss";
import { useHistory } from 'react-router-dom';


export default function Payment() {
const history = useHistory();

  return (
    <div className={Style.payment}>
      <div className={Style.item}>
        <span className={Style.span1}>
            Status:
        </span>
        <span className={Style.status}>{"Unpaid"}</span>
      </div>
      <div className={Style.item}>
        <span className={Style.spna1}>
            Amount:
        </span>
        <span>{"1000tk"}</span>
      </div>
      <button onClick={()=>history.push({pathname: '/payment' , state: { amount: '1000tk' }})}>Pay Now</button>
    </div>
  );
}
