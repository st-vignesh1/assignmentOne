import { createSelector } from 'reselect';

const selectLoading = (state) => state.stock.loading;
const selectStockData = (state) => state.stock.stockData;
const selectTopGainers = (state) => state.stock.topGainers;
const selectTopLosers = (state) => state.stock.topLosers;

const selectStockHeaders = createSelector([selectStockData], (stockData) => stockData.headers)

const selectTopStock = createSelector(
    [selectTopGainers, selectTopLosers],
    (topGainers, topLosers) => ({
        topGainers,
        topLosers
    })
);

export { selectLoading, selectStockData, selectTopGainers, selectTopLosers, selectTopStock, selectStockHeaders };