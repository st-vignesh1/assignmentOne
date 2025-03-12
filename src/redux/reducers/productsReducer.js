import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState ={
    allCategoryProducts:[],
    productCategory:[],
    selectedCategoryProduct:[],
    productHeaders:[],
    isLoading:false,
    error:""
}

const productSlice=createSlice({
    name:"productSlice",
    initialState,
    reducers:{
        setAllCategoryProducts(state,action){
            state.allCategoryProducts=action.payload.map((product) => ({
                title: product.title,
                category: product.category,
                price: product.price,
                rating: product.rating,
                stock: product.stock,
              }));
            state.productHeaders=Object.keys(state.allCategoryProducts[0]);
        },
        setIsLoading(state,action){
            state.isLoading=action.payload;
        },
        setAllCategory(state,action){
            state.productCategory=action.payload;
        },
        setCategoryProducts(state,action){
            state.selectedCategoryProduct=action.payload
        }
    }
});


// Dont forget to create a helper function because the code is getting repeated !

export const fetchAllCategoryProducts = createAsyncThunk('productSlice/fetchAllCategoryProducts',async (_,{dispatch})=>{
try{
    setIsLoading(true)
    const response = await axios.get("https://dummyjson.com/products?limit=15");
    dispatch(setAllCategoryProducts(response?.data?.products))
    setIsLoading(false)
}catch(error){
    console.error("Error fetching data:",error)
}
})


export const fetchProductCategory = createAsyncThunk("productSlice/fetchProductCategory",async(_,{dispatch})=>{
    try{
        setIsLoading(true)
        const response = await axios.get("https://dummyjson.com/products/categories?limit=5");
        dispatch(setAllCategory(response?.data?.slice(0,5)))
        setIsLoading(false)
    }catch(error){
        console.error("Error fetching data:",error)
    }
})


export const fetchProductsByCategory = createAsyncThunk("productSlice/fetchProductsByCategory",async(url,{dispatch})=>{
    try{
        dispatch(setIsLoading(true))
        const response = await axios.get(url);
        dispatch(setCategoryProducts(response?.data))
        dispatch(setIsLoading(false))
    }catch(error){
        console.error("Error fetching data:",error)
    }
})

export const {setAllCategory,setIsLoading,setAllCategoryProducts,setCategoryProducts} = productSlice.actions;
export default productSlice.reducer;