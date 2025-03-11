import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";



const initialState={
    annualIncomeReport:[],
    isLoading:false,
}

const incomeStatementSlice=createSlice({
    name:"companyIncomeReportSlice",
    initialState,
    reducers:{
        setLoading(state,action){
            state.isLoading=action.payload
        },
        setIncomeReportData(state,action){
            state.annualIncomeReport=action.payload;
        }
    }
})
export const fetchCompanyIncomeData = createAsyncThunk('companyIncomeReportSlice/fetchCompanyData',async (companyName,{dispatch})=>{
    try{
        dispatch(setLoading(true))
        const response =await axios.get(`https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=IBM&apikey=demo`)
        dispatch(setIncomeReportData(response?.data.annualReports));
        dispatch(setLoading(false));
    }catch(error){
        console.error("Error fetching data:",error)
    }
})

export const {setLoading,setIncomeReportData}=incomeStatementSlice.actions;
export default incomeStatementSlice.reducer;