import { createSelector } from "reselect";


const selectProduct = state=>state.products;

const selectAllCategoryProducts=createSelector(selectProduct,product=>product.allCategoryProducts)

const selectAllCategory=createSelector(selectProduct,product=>product.productCategory)

const selectProductHeaders = createSelector(selectProduct,product=>product.productHeaders)
export {selectAllCategoryProducts,selectAllCategory,selectProductHeaders}