import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch } from 'react-redux'
import { fetchAllCategoryProducts, fetchProductsByCategory } from '../../redux/reducers/productsReducer';
import RenderTable from '../core/Table/RenderTable';
import PropTypes from 'prop-types';

export default function ProductTable({isCategorySelected,allCategoryProducts,productHeaders,selectedProduct,productDataIsLoading,categoryPage,hasMoreProduct,allCategorypage,searchParams}) {
const dispatch = useDispatch();

  return (
    <div>
      {!isCategorySelected && allCategoryProducts?.length>0 && productHeaders?.length>0 && <InfiniteScroll dataLength={allCategoryProducts.length} next={()=>dispatch(fetchAllCategoryProducts(allCategorypage)) }hasMore={hasMoreProduct}><RenderTable headers={productHeaders} data={allCategoryProducts}/></InfiniteScroll>}
      {isCategorySelected && selectedProduct?.length>0 &&productHeaders?.length>0 && !productDataIsLoading&&<InfiniteScroll dataLength={selectedProduct.length} next={()=>dispatch(fetchProductsByCategory({ category: searchParams.get("category"), page: categoryPage } ))} hasMore={hasMoreProduct}><RenderTable headers={productHeaders} data={selectedProduct}/></InfiniteScroll>}
      </div>
  )
}

ProductTable.propTypes = {
  isCategorySelected: PropTypes.bool.isRequired,
  allCategoryProducts: PropTypes.array.isRequired,
  productHeaders: PropTypes.array.isRequired,
  selectedProduct: PropTypes.array.isRequired,
  productDataIsLoading: PropTypes.bool.isRequired,
  categoryPage: PropTypes.number.isRequired,
  hasMoreProduct: PropTypes.bool.isRequired,
  allCategorypage: PropTypes.number.isRequired,
  searchParams: PropTypes.object.isRequired,
};