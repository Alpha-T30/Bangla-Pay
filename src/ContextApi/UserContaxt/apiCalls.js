import axios from 'axios' ; 
import { loginFailure,loginStart, loginSuccess } from './AuthActions';
 


export const login =async (dispatch,user)=>{
   dispatch(loginStart()) ; 
    try {
        const res = await axios.post("http://localhost:5000/login/", user)
       dispatch(loginSuccess(res.data))
        
    } catch (error) {
        dispatch(loginFailure())
        
    }

}