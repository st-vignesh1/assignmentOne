import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState ={
    allCategoryProducts:[],
    productCategory:[],
    selectedCategoryProduct:[],
    productHeaders:[],
    isLoading:false,
    error:"",
    page:0,
    hasMoreProduct:true
}

const productSlice=createSlice({
    name:"productSlice",
    initialState,
    reducers:{
        setAllCategoryProducts(state,action){
            state.allCategoryProducts = [
                ...state.allCategoryProducts,
                ...action.payload.map((product) => ({
                    title: product.title,
                    category: product.category,
                    price: product.price,
                    rating: product.rating,
                    stock: product.stock,
                })),
            ];
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
        },
        setPage(state,action){
            state.page=action.payload;
        },
        setHasMoreProduct(state,action){
            state.hasMoreProduct=action.payload;
        }
    }
});


// Dont forget to create a helper function because the code is getting repeated !

export const fetchAllCategoryProducts = createAsyncThunk('productSlice/fetchAllCategoryProducts',async (page,{dispatch})=>{
try{
   
    setIsLoading(true)
    const response = await axios.get(`https://dummyjson.com/products?limit=15&skip=${page*15}`);
    if(response?.data?.products.length==0)dispatch(setHasMoreProduct(false))
        console.log("fetching.....")
    dispatch(setAllCategoryProducts(response?.data?.products))
    dispatch(setPage(page+1))
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


export const fetchProductsByCategory = createAsyncThunk("productSlice/fetchProductsByCategory",async(category,{dispatch})=>{
    try{
        console.log("clicked")
        dispatch(setIsLoading(true))
        const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
        if(response?.data?.products.length==0)dispatch(setHasMoreProduct(false))
        dispatch(setCategoryProducts(response?.data?.products))
     
        dispatch(setIsLoading(false))
    }catch(error){
        console.error("Error fetching data:",error)
    }
})

export const {setAllCategory,setIsLoading,setAllCategoryProducts,setCategoryProducts,setPage,setHasMoreProduct} = productSlice.actions;
export default productSlice.reducer;