import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




const initialState ={
    allCategoryProducts:[],
    productCategory:[],
    selectedCategoryProduct:[],
    isLoading:false,
    error:""
}

const productSlice=createSlice({
    name:"productSlice",
    initialState,
    reducers:{
        setAllCategory(state,action){
            state.allCategoryProducts=action.payload;
        },
        setIsLoading(state,action){
            state.isLoading=action.payload;
        }
    }
});

export const fetchAllCategoryProducts = createAsyncThunk('productSlice/fetchAllCategoryProducts',async (_,{dispatch})=>{
try{
    setIsLoading(true)
    const response = await axios.get("https://dummyjson.com/products?limit=15");
    dispatch(setAllCategory(response?.data))
    setIsLoading(false)
}catch(error){
    console.error("Error fetching data:",error)
}
})

export const {setAllCategory,setIsLoading} = productSlice.actions;
export default productSlice.reducer;