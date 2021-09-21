import Style from './navbar.module.scss' ; 

import{ ArrowBack ,ExitToApp } from '@mui/icons-material';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useHistory } from 'react-router';

export default function Navbar({forPayment}) {
    const history = useHistory()

    const logOut = (e)=>{
            e.preventDefault() 
            
    }
    return (
        <div className={Style.navbar}>
                <div className={Style.wrapper}>
                    {forPayment? <div onClick={()=>history.goBack()} className={Style.arrowBack}>
                         <ArrowBack className={Style.icon}></ArrowBack>
                    </div> : <div className={Style.left}>
                        <span>Company Name</span>
                    </div>}
                    <div onClick={logOut} className={Style.arrowBack}>
                          <ExitToApp></ExitToApp>
                    </div>
                </div>
            
        </div>
    )
}
