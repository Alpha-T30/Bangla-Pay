import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo:{},
    pending:false,
    error: false,
  },
  reducers: {
    startUpdate: (state) => {
      state.pending = true;
    },

    updateSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;

      state.error = false;
    },

    updateFail:(state)=>{
      state.error=true 
      state.pending=false
    }, 
    deleteUser:(state=>state=null)
     
  },
});

export const descSlice = createSlice({
  name:"desc" , 
  initialState:{
    desc:{
      name:'fedux' , 
      desc:"it's not good man!"
    } , 
    pending: null,
    error: false,
  } , 
  reducers:{
    startDesc:(state) =>{
      state.pending=true
    } , 

    successDesc:(state,action) =>{
      state.pending=false
      state.desc=action.payload
      state.error=false
    } , 

    failedDesc:(state) =>{
      state.error=true
    } ,  

    deleteDesc:(state=>state=null)

  }
})
export const { startUpdate,updateFail,updateSuccess  , deleteUser} = userSlice.actions;
export const { startDesc, successDesc, failedDesc  ,  deleteDesc} = descSlice.actions;

const  userReducer = userSlice.reducer;
const descReducer =descSlice.reducer ; 

export {userReducer , descReducer}