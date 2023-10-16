import { configureStore, createSlice } from "@reduxjs/toolkit";
import CartSlice from "../Features/CartSlice"
export default configureStore({
    reducers:{
        Cart:CartSlice,
    }
})
