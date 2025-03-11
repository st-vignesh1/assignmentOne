import { configureStore } from "@reduxjs/toolkit";
import StockSlice from "../reducers/stockReducer";
import companyDetailSlice from "../reducers/companyDataReducer"
import companyIncomeReportSlice from "../reducers/incomeStatementReducer"
import productSlice from "../reducers/productsReducer"
const store = configureStore(
    {
        reducer: {
            stock: StockSlice,
            company:companyDetailSlice,
            companyIncome:companyIncomeReportSlice,
            products:productSlice
        }
    }
)
export default store;