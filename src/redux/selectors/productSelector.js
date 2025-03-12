import { createSelector } from "reselect";


const selectProduct = state=>state.products;

const selectAllCategoryProducts=createSelector(selectProduct,product=>product.allCategoryProducts)

const selectAllCategory=createSelector(selectProduct,product=>product.productCategory)

const selectProductHeaders = createSelector(selectProduct,product=>product.productHeaders)

const selectedCategoryProduct = createSelector(selectProduct,product=>product.selectedCategoryProduct)
export {selectAllCategoryProducts,selectAllCategory,selectProductHeaders,selectedCategoryProduct}