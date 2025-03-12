import { createSelector } from "reselect";


const selectProduct = state=>state.products;

const selectAllCategoryProducts=createSelector(selectProduct,product=>product.allCategoryProducts)

const selectAllCategory=createSelector(selectProduct,product=>product.productCategory)

const selectProductHeaders = createSelector(selectProduct,product=>product.productHeaders)

const selectedCategoryProduct = createSelector(selectProduct,product=>product.selectedCategoryProduct)

const selectProductDataIsLoading=createSelector(selectProduct,product=>product.isLoading)

const selectHasMoreProduct=createSelector(selectProduct,product=>product.hasMoreProduct)

const selectAllCategoryPage=createSelector(selectProduct,product=>product.allCategorypage)

const selectCategoryPage = createSelector(selectProduct,product=>product.categoryPage)
export {selectAllCategoryProducts,selectAllCategory,selectProductHeaders,selectedCategoryProduct,selectProductDataIsLoading,selectHasMoreProduct,selectAllCategoryPage,selectCategoryPage}