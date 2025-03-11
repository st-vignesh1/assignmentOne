import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCategoryProducts } from '../redux/reducers/productsReducer'
import { selectAllCategoryProducts } from '../redux/selectors/productSelector';

export default function Products() {
    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(fetchAllCategoryProducts())
    },[dispatch])
    const allCategoryProducts=useSelector(selectAllCategoryProducts)
    console.log(allCategoryProducts)
  return (
    <div>
      
    </div>
  )
}
