import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




const initialState={
    selectedCompanyData:[],
    isLoading:false,
    error:"",

}

const companyDetailSlice = createSlice({
    name:"companyDetailSlice",
    initialState,
    reducers:{
        setLoading(state,action){
            state.isLoading = action.payload;
        },
        setCompanyData(state,action){
            state.selectedCompanyData = action.payload;
        }
    }

})





export const {setLoading,setCompanyData} = companyDetailSlice.actions; 
export default companyDetailSlice.reducer;