import BkashButton, { IComponentConfig, SuccessFunction } from "react-bkash";
import React, { CSSProperties, FC } from "react";
import { useEffect, useState  } from "react";
import Style from "./bkash.module.scss";
import { useHistory } from 'react-router-dom';


const Bkash: FC = () => {
  const [check, setCheck] = useState("");
  const history = useHistory()
  console.log(check);

  const handleSuccess: SuccessFunction = (data) => {
     history.push("/")
  };

  const handleClose = () => {
    window.location.reload();
  };

  const config: IComponentConfig = {
    amount: "10",

    bkashScriptURL:
      "https://scripts.sandbox.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout-sandbox.js",
    createPaymentURL: "https://pay-server.herokuapp.com/createRequest",
    executePaymentURL: "https://pay-server.herokuapp.com/executeRequest",
    additionalHeaders: {
      Authorization: "Bearer YOUR_TOKEN",
    },
  };

  return (
    <BkashButton
      onSuccess={handleSuccess}
      onClose={handleClose}
      config={config}
    >
      <div className={Style.bkash}>
		  <img src="./Images/bkash.png" alt="" />
		  Pay With Bkash
	  </div>
    </BkashButton>
  );
};

export default Bkash;

// const buttonStyle: CSSProperties = {
// 	minWidth: '170px',
// 	height: '38px',
// 	fontSize: '0.875rem',
// 	fontWeight: 500,
// 	lineHeight: 1.5,
// 	color: '#fff',
// 	padding: '0.375rem 0.75rem',
// 	textTransform: 'uppercase',
// 	backgroundColor: '#e2136e',
// 	border: '1px solid #e2136e',
// };
