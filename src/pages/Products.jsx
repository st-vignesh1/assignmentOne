import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCategoryProducts, fetchProductCategory, fetchProductsByCategory, setCategoryPage } from '../redux/reducers/productsReducer'
import { selectAllCategory, selectAllCategoryPage, selectAllCategoryProducts, selectCategoryPage, selectedCategoryProduct, selectHasMoreProduct, selectProductDataIsLoading, selectProductHeaders } from '../redux/selectors/productSelector';
import Button from '../components/core/Button/Button';
import LoadingSpinner from '../components/core/LoadingSpinner/LoadingSpinner';
import RenderTable from '../components/core/Table/RenderTable';
import { useSearchParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import Modal from '../components/core/Modal/Modal';
import ModalContent from '../components/ModaContent/ModalContent';

export default function Products() {
 const [isCategorySelected,setIsCategorySelected]=useState(false);
 const [selectedCategory,setSelectedCategory]=useState("")
 const [searchParams,setSearchParams]=useSearchParams({category:""})
const [isModalOpen,setIsModalOpen]=useState(false);
const [editProduct,setEditProduct]=useState([]);
const allCategorypage =useSelector(selectAllCategoryPage)
const categoryPage = useSelector(selectCategoryPage)
const hasMoreProduct = useSelector(selectHasMoreProduct)

    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(fetchAllCategoryProducts(allCategorypage))
        dispatch(fetchProductCategory())
      
    },[dispatch])

    let allCategoryProducts=useSelector(selectAllCategoryProducts)

    allCategoryProducts=allCategoryProducts?.length &&
    allCategoryProducts.map((product) => ({
        ...product,
        action: <Button content="edit" onClick={handlePassEditProduct} id={product.id}/>
    }));
   
    const allCategory = useSelector(selectAllCategory);

    let productHeaders =useSelector(selectProductHeaders)
    productHeaders=productHeaders?.length && [...productHeaders,"action"]
    const productDataIsLoading = useSelector(selectProductDataIsLoading)  
    function handleSelectCategory(e, {content:category}) {
      e.preventDefault();
  
      if (!isCategorySelected) setIsCategorySelected(true);
  
      const selectedCategory = allCategory.find((cat) => category === cat.name);
  
      if (selectedCategory) {
          setSelectedCategory(selectedCategory.name);
          setSearchParams({ category: selectedCategory.slug });
          dispatch(setCategoryPage(0)); 
          dispatch(fetchProductsByCategory({ category: selectedCategory.slug, page: 0 }));
      }
  }

  function handlePassEditProduct(e, { id }) {
    e.preventDefault();
    console.log("Clicked product ID:", id);
  
    let filteredProduct = [];
    if (selectedProduct && Array.isArray(selectedProduct)) {
      filteredProduct = selectedProduct.filter((product) => product.id === id);
    }
  
    if (filteredProduct.length === 0 && allCategoryProducts && Array.isArray(allCategoryProducts)) {
      filteredProduct = allCategoryProducts.filter((product) => product.id === id);
    }
  console.log(filteredProduct)
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
    let selectedProduct=useSelector(selectedCategoryProduct)
   
    selectedProduct=selectedProduct?.length && selectedProduct.map((product) => ({
      ...product,
      action: <Button content="edit" onClick={handlePassEditProduct} id={product.id}/>
  }));

  return (
    <div className='w-full min-h-screen p-8'>
      <h1 className='text-2xl font-semibold mb-8 text-center'>Products Page</h1>
      <div className='flex gap-4 mb-8 justify-center'>
   {allCategory?.length>0 ?
   allCategory.map((category,index)=><Button content={category.name} key={index} onClick={handleSelectCategory} selectedCategory={selectedCategory}/>)
   :<LoadingSpinner spinnerHeight="h-10"/>}
      </div >
      <div className='flex justify-center items-center mb-8'>
   {allCategory?.length>0 || selectedProduct?.length>0 ? <Button content="Add Item" onClick={handleModal}/>:<LoadingSpinner spinnerHeight="h-10" />}
  { isModalOpen && <Modal setIsModalOpen={setIsModalOpen}><ModalContent setIsModalOpen={setIsModalOpen} editProduct={editProduct[0]}/></Modal>}
      </div>
      <div>
      {!isCategorySelected && allCategoryProducts?.length>0 && productHeaders?.length>0 && <InfiniteScroll dataLength={allCategoryProducts.length} next={()=>dispatch(fetchAllCategoryProducts(allCategorypage)) }hasMore={hasMoreProduct}><RenderTable headers={productHeaders} data={allCategoryProducts}/></InfiniteScroll>}
      {isCategorySelected && selectedProduct?.length>0 &&productHeaders?.length>0 && !productDataIsLoading&&<InfiniteScroll dataLength={selectedProduct.length} next={()=>dispatch(fetchProductsByCategory({ category: searchParams.get("category"), page: categoryPage } ))} hasMore={hasMoreProduct}><RenderTable headers={productHeaders} data={selectedProduct}/></InfiniteScroll>}
      </div>
    </div>
  )
}
