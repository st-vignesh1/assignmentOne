import { createSelector } from "@reduxjs/toolkit";


const stockSelector = state=>state.stock;
const selectLoadingSelector =createSelector(stockSelector,stock=>stock.loading)
const selectStockDataSelector= createSelector(stockSelector,stock=>stock.stockData)
const selectStockHeadersSelector = createSelector([selectStockDataSelector], (stockData) => stockData.headers)
const selectTopGainersSelector=createSelector(stockSelector,stock=>stock.topGainers)
const selectTopLosersSelector=createSelector(stockSelector,stock=>stock.topLosers)




export { stockSelector,selectLoadingSelector, selectStockDataSelector, selectTopGainersSelector, selectTopLosersSelector, selectStockHeadersSelector };