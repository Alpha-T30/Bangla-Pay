import axios from 'axios' ; 
import { loginFailure,loginStart, loginSuccess } from './AuthActions';
 


export const login =async (dispatch,user)=>{
   dispatch(loginStart()) ; 
    try {
        const res = await axios.post("https://fakeapii.herokuapp.com/login", user)
       dispatch(loginSuccess(res.data))
        
    } catch (error) {
        dispatch(loginFailure())
        
    }

}