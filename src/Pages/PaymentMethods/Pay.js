import React from 'react'
import Bkash from '../../Components/Bkash/bkash';
import Navbar from '../../Components/NavBar/Navbar' ; 
import Style from './pay.module.scss' ; 
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Pay() {

    const location = useLocation();
 

   

    return (
        <div className={Style.pay}>
             <Navbar forPayment={true}></Navbar>  
             <div className={Style.container}>
                 <Bkash></Bkash>
                 
             </div>
        </div>
    )
}
