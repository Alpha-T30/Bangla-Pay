import { startUpdate, updateSuccess, updateFail, failedDesc, startDesc, successDesc } from "./reduxSlice";
import axios from "axios" ; 
export const updateUser = async (user, dispatch) => {
  dispatch(startUpdate());

  try {
      const res = await axios.post("http://localhost:5000/login/", {
          userId:user.userId, 
          password:user.password
      }) ; 
   
      dispatch(updateSuccess(res.data)) 
  } catch (error) {
     dispatch(updateFail()) ; 
  }
};


export const updateDesc = async (desc, dispatch) =>{
  dispatch(startDesc())

  try {
    const res =await axios.get("http://localhost:8800/api/others/") ; 
    dispatch(successDesc(res.data))

    
  } catch (error) {
    dispatch(failedDesc())
    
  }

}