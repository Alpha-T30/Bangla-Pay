import Style from './navbar.module.scss' ; 

import{ ArrowBack ,ExitToApp } from '@mui/icons-material';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useHistory } from 'react-router';
import { AuthContext } from '../../ContextApi/UserContaxt/AuthContext';
import { useContext } from 'react';
import { logOut } from "../../ContextApi/UserContaxt/AuthActions";

export default function Navbar({forPayment}) {
    const history = useHistory()
    const{sender:dispatch} =useContext(AuthContext)

    const logout = ()=>{
            // e.preventDefault()
             dispatch(logOut())
            
    }
    return (
        <div className={Style.navbar}>
                <div className={Style.wrapper}>
                    {forPayment? <div onClick={()=>history.goBack()} className={Style.arrowBack}>
                         <ArrowBack className={Style.icon}></ArrowBack>
                    </div> : <div className={Style.left}>
                        <span>Company Name</span>
                    </div>}
                    <div onClick={ ()=>{
                        logout()
                    }} className={Style.arrowBack}>
                          <ExitToApp></ExitToApp>
                    </div>
                </div>
            
        </div>
    )
}
