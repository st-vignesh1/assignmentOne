import { configureStore } from "@reduxjs/toolkit";
import StockSlice from "../reducers/stockReducer";
import companyDetailSlice from "../reducers/companyDataReducer"
import companyIncomeReportSlice from "../reducers/incomeStatementReducer"
const store = configureStore(
    {
        reducer: {
            stock: StockSlice,
            company:companyDetailSlice,
            companyIncome:companyIncomeReportSlice,
        }
    }
)
export default store;