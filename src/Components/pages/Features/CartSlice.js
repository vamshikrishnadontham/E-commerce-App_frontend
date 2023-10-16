 import { createSlice } from "@reduxjs/toolkit";

 const cart=createSlice({
    name:"cart",
    initialState:"",
    reducers:{
        addToCart:(state,action)=>{

        }
    }
 })
 export const {addToCart}=createSlice.actions
 export default createSlice.reducer;