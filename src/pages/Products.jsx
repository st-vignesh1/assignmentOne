import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCategoryProducts, fetchProductCategory, fetchProductsByCategory } from '../redux/reducers/productsReducer'
import { selectAllCategory, selectAllCategoryProducts, selectedCategoryProduct, selectProductHeaders } from '../redux/selectors/productSelector';
import Button from '../components/core/button/Button';
import LoadingSpinner from '../components/core/loadingSpinner/LoadingSpinner';
import RenderTable from '../components/core/table/RenderTable';

export default function Products() {
 const [isCategorySelected,setIsCategorySelected]=useState(false);
    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(fetchAllCategoryProducts())
        dispatch(fetchProductCategory())
    },[dispatch])
    const allCategoryProducts=useSelector(selectAllCategoryProducts)
    const allCategory = useSelector(selectAllCategory);
    const productHeaders =useSelector(selectProductHeaders);
    function handleSelectCategory(e,category){
      e.preventDefault();
    if(!isCategorySelected) setIsCategorySelected(true)
    const selectedCategory=allCategory.filter(cat=>category===cat.name)

    dispatch(fetchProductsByCategory(selectedCategory[0].slug));
    }
    const selectedProduct=useSelector(selectedCategoryProduct)
    console.log("selectedProduct",selectedProduct);
  return (
    <div className='w-full min-h-screen p-8'>
      <h1 className='text-2xl font-semibold mb-8'>Products Page</h1>
      <div className='flex gap-4 mb-8'>
   {allCategory?.length>0 ?
   allCategory.map((category,index)=><Button content={category.name} key={index} onClick={handleSelectCategory}/>)
   :<LoadingSpinner spinnerHeight="h-10"/>}
      </div >
      <div>
      {!isCategorySelected && allCategoryProducts?.length>0 && productHeaders?.length>0 && <RenderTable headers={productHeaders} data={allCategoryProducts}/>}
      {isCategorySelected && selectedProduct?.length>0 &&productHeaders?.length>0 && <RenderTable headers={productHeaders} data={selectedProduct}/> }
      </div>
    </div>
  )
}
