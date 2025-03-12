import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCategoryProducts, fetchProductCategory } from '../redux/reducers/productsReducer'
import { selectAllCategory, selectAllCategoryProducts, selectProductHeaders } from '../redux/selectors/productSelector';

export default function Products() {
    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(fetchAllCategoryProducts())
        dispatch(fetchProductCategory())
    },[dispatch])
    const allCategoryProducts=useSelector(selectAllCategoryProducts)
    const allCategory = useSelector(selectAllCategory);
    const productHeaders =useSelector(selectProductHeaders);
    console.log(allCategoryProducts)
    console.log(allCategory)
    console.log("Headers",productHeaders)
  return (
    <div>
      
    </div>
  )
}
