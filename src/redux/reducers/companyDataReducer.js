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

export const fetchCompanyData = createAsyncThunk('companyDetailSlice/fetchCompanyData',async (companyName,{dispatch})=>{
    try{
        dispatch(setLoading(true))
        const response =await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo`)
        dispatch(setCompanyData(response?.data));
        dispatch(setLoading(false));
    }catch(error){
        console.error("Error fetching data:",error)
    }
})


export const {setLoading,setCompanyData} = companyDetailSlice.actions; 
export default companyDetailSlice.reducer;