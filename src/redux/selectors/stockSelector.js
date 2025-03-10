import { createSelector } from "@reduxjs/toolkit";


const stockSelector = state=>state.stock;
const selectLoading =createSelector(stockSelector,stock=>stock.loading)
const selectStockData= createSelector(stockSelector,stock=>stock.stockData)
const selectStockHeaders = createSelector([selectStockData], (stockData) => stockData.headers)
const selectTopGainers=createSelector(stockSelector,stock=>stock.topGainers)
const selectTopLosers=createSelector(stockSelector,stock=>stock.topLosers)

export { stockSelector,selectLoading, selectStockData, selectTopGainers, selectTopLosers, selectStockHeaders };