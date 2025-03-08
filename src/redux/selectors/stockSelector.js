import { createSelector } from "@reduxjs/toolkit";


const selectStock = state=>state.stock;
const selectLoading =createSelector(selectStock,stock=>stock.loading)
const selectStockData= createSelector(selectStock,stock=>stock.stockData)
const selectStockHeaders = createSelector([selectStockData], (stockData) => stockData.headers)
const selectTopGainers=createSelector(selectStock,stock=>stock.topGainers)
const selectTopLosers=createSelector(selectStock,stock=>stock.topLosers)

export { selectStock,selectLoading, selectStockData, selectTopGainers, selectTopLosers, selectStockHeaders };