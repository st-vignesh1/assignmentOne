import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Button from "../../components/core/Button/Button";



const initialState ={
    allCategoryProducts:[],
    productCategory:[],
    selectedCategoryProduct:[],
    productHeaders:[],
    isLoading:false,
    error:"",
    allCategorypage:0,
    categoryPage:0,
    hasMoreProduct:true
}

const productSlice=createSlice({
    name:"productSlice",
    initialState,
    reducers:{
        setAllCategoryProducts(state, action) {
            const newProducts = action.payload.map((product) => ({
                id: product.id,
                title: product.title,
                category: product.category,
                price: product.price,
                rating: product.rating,
                stock: product.stock,
            }));

            const existingProductIds = new Set(
                state.allCategoryProducts.map((product) => product.id)
            );

            state.allCategoryProducts = [
                ...state.allCategoryProducts,
                ...newProducts.filter((product) => !existingProductIds.has(product.id)),
            ];

            if (state.allCategoryProducts.length > 0) {
                state.productHeaders = Object.keys(state.allCategoryProducts[0]).filter(
                    (key) => key !== "id"
                );
            }
            state.allCategorypage += 1;
        },
        setIsLoading(state,action){
            state.isLoading=action.payload;
        },
        setAllCategory(state,action){
            state.productCategory=action.payload;
        },
        setCategoryProducts(state,action){
          if(action.payload.length==0)return;
          if(state.selectedCategoryProduct.length==0 || action.payload[0].category!==state.selectedCategoryProduct[0].category ){
            state.selectedCategoryProduct=action.payload}
       else{

           state.selectedCategoryProduct=[...state.selectedCategoryProduct,...action.payload.map((product) => ({
               title: product.title,
               category: product.category,
               price: product.price,
               rating: product.rating,
               stock: product.stock,
            }))]
        }
        },
        setCategoryPage(state,action){
            state.categoryPage=action.payload;
        },
        setHasMoreProduct(state,action){
            state.hasMoreProduct=action.payload;
        },
        setUpdatedProduct(state,action){

            const newProducts = action.payload.map((product) => ({
                id: product.id,
                title: product.title,
                category: product.category,
                price: product.price,
                rating: product.rating,
                stock: product.stock,
            }));

            if(state.selectedCategoryProduct.length>0){
         
             const matchedProduct=state.selectedCategoryProduct?.length && state.selectedCategoryProduct.findIndex(product=>product.id===newProducts[0].id)
            state.selectedCategoryProduct[matchedProduct]=newProducts[0]
            }
            else{
                const matchedProduct=state.allCategoryProducts?.length && state.allCategoryProducts.findIndex(product=>product.id===newProducts[0].id)
                state.allCategoryProducts[matchedProduct]=newProducts[0];
            }
        }

    }
});


// Dont forget to create a helper function because the code is getting repeated !

export const fetchAllCategoryProducts = createAsyncThunk('productSlice/fetchAllCategoryProducts',async (page,{dispatch})=>{
try{
   
    setIsLoading(true)
    const response = await axios.get(`https://dummyjson.com/products?limit=15&skip=${page*15}`);
    if(response?.data?.products.length==0)dispatch(setHasMoreProduct(false))
        else{

    dispatch(setAllCategoryProducts(response?.data?.products))
    setIsLoading(false)
}
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


export const fetchProductsByCategory = createAsyncThunk("productSlice/fetchProductsByCategory",async({category,page},{dispatch})=>{
    try{
 
        dispatch(setIsLoading(true))
        const response = await axios.get(`https://dummyjson.com/products/category/${category}?limit=15&skip=${page*15}`);
 
        if(response?.data.products.length==0){dispatch(setHasMoreProduct(false));dispatch(setIsLoading(false))}
        else{
    dispatch(setCategoryProducts(response?.data?.products))
    dispatch(setCategoryPage(page+1))
    dispatch(setIsLoading(false))
}
    }catch(error){
        console.error("Error fetching data:",error)
    }
})

export const fetchAddedProduct = createAsyncThunk('productSlice/fetchAddedProduct',async({category,newProduct},{dispatch})=>{
    try{
        if(!category){
            const response =await  axios.post("https://dummyjson.com/products/add",newProduct);
            dispatch(setAllCategoryProducts([response.data]));
        }
        else{
            const response =await  axios.post(`https://dummyjson.com/products/${category}/add`,newProduct);
            dispatch(setCategoryProducts([response.data]));
        }
        
    }catch(error){
        console.error("Error Adding data:",error)
    }
} )


export const fetchModifiedProduct = createAsyncThunk(
    "productSlice/fetchModifiedProduct",
    async ({ id, updatedProduct }, { dispatch}) => {
        console.log(updatedProduct)
      try {
        const response = await axios.patch(`https://dummyjson.com/products/${id}`,{...updatedProduct})
        console.log(response.data)
        dispatch(setUpdatedProduct([response.data]))
      } catch (error) {
        console.error("Error Updating Data:", error);
      }
    }
  );
  
  

export const {setAllCategory,setIsLoading,setAllCategoryProducts,setCategoryProducts,setHasMoreProduct,setCategoryPage,setUpdatedProduct} = productSlice.actions;
export default productSlice.reducer;