import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCategoryProducts, fetchProductCategory, setCategoryPage } from '../redux/reducers/productsReducer'
import { selectAllCategorySelector, selectAllCategoryPageSelector, selectAllCategoryProductsSelector,selectedCategoryProductSelector, selectHasMoreProductSelector, selectProductDataIsLoadingSelector, selectProductHeadersSelector } from '../redux/selectors/product';
import Button from '../components/core/Button';
import LoadingSpinner from '../components/core/LoadingSpinner';
import { useSearchParams } from 'react-router-dom';
import Modal from '../components/core/Modal';
import ModalContent from '../components/ModaContent';
import ProductTable from '../components/ProductsTable';
import CategoryButton from '../components/CategoryButton';

export default function Products() {
 const [isCategorySelected,setIsCategorySelected]=useState(false);
 const [selectedCategory,setSelectedCategory]=useState("")
 const [searchParams,setSearchParams]=useSearchParams({category:""})
const [isModalOpen,setIsModalOpen]=useState(false);
const [editProduct,setEditProduct]=useState([]);
const allCategorypage =useSelector(selectAllCategoryPageSelector)
const categoryPage = useSelector(selectAllCategoryPageSelector)
const hasMoreProduct = useSelector(selectHasMoreProductSelector)

    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(fetchAllCategoryProducts(allCategorypage))
        dispatch(fetchProductCategory())
      
    },[dispatch])

    let allCategoryProducts=useSelector(selectAllCategoryProductsSelector)
    allCategoryProducts=allCategoryProducts?.length &&
    allCategoryProducts.map((product) => ({
        ...product,
        action: <Button content="edit" onClick={handlePassEditProduct} id={product.id}/>
    }));
    const allCategory = useSelector(selectAllCategorySelector);
    let productHeaders =useSelector(selectProductHeadersSelector)
    productHeaders=productHeaders?.length && [...productHeaders,"action"]
    const productDataIsLoading = useSelector(selectProductDataIsLoadingSelector)  
    

  function handlePassEditProduct(e, { id }) {
    e.preventDefault();

  
    let filteredProduct = [];
    if (selectedProduct && Array.isArray(selectedProduct)) {
      filteredProduct = selectedProduct.filter((product) => product.id === id);
    }
  
    if (filteredProduct.length === 0 && allCategoryProducts && Array.isArray(allCategoryProducts)) {
      filteredProduct = allCategoryProducts.filter((product) => product.id === id);
    }
 
    setEditProduct(filteredProduct);
    if (filteredProduct.length > 0) {
      handleModal(); 
    } else {
      console.error("No product found with ID:", id);
    }
  }
  
  function handleModal(){
    setIsModalOpen(true)
  }
    let selectedProduct=useSelector(selectedCategoryProductSelector)
   
    selectedProduct=selectedProduct?.length && selectedProduct.map((product) => ({
      ...product,
      action: <Button content="edit" onClick={handlePassEditProduct} id={product.id}/>
  }));

  return (
    <div className='w-full min-h-screen p-8'>
      <h1 className='text-2xl font-semibold mb-8 text-center'>Products Page</h1>
      <CategoryButton allCategory={allCategory} setIsCategorySelected={setIsCategorySelected}isCategorySelected={isCategorySelected}setSelectedCategory={setSelectedCategory}setCategoryPage={setCategoryPage} setSearchParams={setSearchParams} selectedCategory={selectedCategory}/>
      <div className='flex justify-center items-center mb-8'>
   {allCategory?.length>0 || selectedProduct?.length>0 ? <Button content="Add Item" onClick={handleModal}/>:<LoadingSpinner spinnerHeight="h-10" />}
  { isModalOpen && <Modal setIsModalOpen={setIsModalOpen}><ModalContent setIsModalOpen={setIsModalOpen} editProduct={editProduct[0]}/></Modal>}
      </div>
      <ProductTable isCategorySelected={isCategorySelected} allCategoryProducts={allCategoryProducts} productHeaders={productHeaders} selectedProduct={selectedProduct} productDataIsLoading={productDataIsLoading} allCategorypage={allCategorypage} hasMoreProduct={hasMoreProduct}categoryPage={categoryPage} searchParams={searchParams}/>
    </div>
  )
}
