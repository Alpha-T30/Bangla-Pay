import BkashButton, { IComponentConfig, SuccessFunction } from "react-bkash";
import React, { FC } from "react";
import { useEffect, useState } from "react";
import Style from "./bkash.module.scss";
import { useHistory } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

const Bkash: FC = () => {
  const history = useHistory();
  const [spinnerr, setSpinner] = useState(false);
  const [serverTest, setServertest] = useState(false);

  useEffect(() => {
    const loadTest = async () => {
      try {
        const res = await axios.get("https://pay-server.herokuapp.com/loading");
      } catch (error) {
        setServertest(true);
      }
    };
    loadTest();
  }, []);

  const handleSuccess: SuccessFunction = (data) => {
    setSpinner(false);
    alert("Payment Successfull");
     window.location.reload() ; 
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
    createPaymentURL: "https://pay-server.herokuapp.com/createRequest",
    executePaymentURL: "https://pay-server.herokuapp.com/executeRequest",
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

 
