import { createSelector } from "reselect";


const selectProduct = state=>state.products;

const selectAllCategoryProductsSelector=createSelector(selectProduct,product=>product.allCategoryProducts)

const selectAllCategorySelector=createSelector(selectProduct,product=>product.productCategory)

const selectProductHeadersSelector = createSelector(selectProduct,product=>product.productHeaders)

const selectedCategoryProductSelector = createSelector(selectProduct,product=>product.selectedCategoryProduct)

const selectProductDataIsLoadingSelector=createSelector(selectProduct,product=>product.isLoading)

const selectHasMoreProductSelector=createSelector(selectProduct,product=>product.hasMoreProduct)

const selectAllCategoryPageSelector=createSelector(selectProduct,product=>product.allCategorypage)

const selectCategoryPageSelector = createSelector(selectProduct,product=>product.categoryPage)
export {selectAllCategoryProductsSelector,selectAllCategorySelector,selectProductHeadersSelector,selectedCategoryProductSelector,selectProductDataIsLoadingSelector,selectHasMoreProductSelector,selectAllCategoryPageSelector,selectCategoryPageSelector}