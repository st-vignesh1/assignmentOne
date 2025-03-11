import { createSelector } from "reselect";


const selectProduct = state=>state.products;

const selectAllCategoryProducts=createSelector(selectProduct,product=>product.allCategoryProducts)

export {selectAllCategoryProducts}