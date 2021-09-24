import BkashButton, { IComponentConfig, SuccessFunction } from "react-bkash";
import React, { CSSProperties, FC } from "react";
import { useEffect, useState } from "react";
import Style from "./bkash.module.scss";
import { useHistory } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";
import Delayed from "./wait";
import axios from "axios";

const Bkash: FC = () => {
  const history = useHistory();
  const [spinnerr, setSpinner] = useState(false);
  const [serverTest, setServertest] = useState(false);

  useEffect(() => {
    const loadTest = async () => {
      try {
        const res = await axios.get("http://localhost:8000/loading");
      } catch (error) {
        setServertest(true);
      }
    };
    loadTest();
  }, []);

  const handleSuccess: SuccessFunction = (data) => {
    setSpinner(false);
    alert("Payment Successfull");
    history.push("/");
  };

  const handleClose = () => {
    setSpinner(false);

    //  window.location.reload()
  };
  const spinner = () => {
    setSpinner(!spinnerr);
  };
  const config: IComponentConfig = {
    amount: "10",

    bkashScriptURL:
      "https://scripts.sandbox.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout-sandbox.js",
    createPaymentURL: "http://localhost:8000/createRequest",
    executePaymentURL: "http://localhost:8000/executeRequest",
    additionalHeaders: {
      Authorization: "Bearer YOUR_TOKEN",
    },
  };

  return !serverTest ? (
    !spinnerr ? (
      <div onClick={spinner}>
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
      </div>
    ) : (
      <div className={Style.bkashspin}>
        <span>Loading please wait....</span>
        <CircularProgress />
      </div>
    )
  ) : (
  
    <div className={Style.bkash}>Internal  server error for bkash contact with Bangla Pay</div>
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
