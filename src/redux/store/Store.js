import { configureStore } from "@reduxjs/toolkit";
import StockSlice from "../reducers/stockReducer";
import companyDetailSlice from "../reducers/companyDataReducer"
const store = configureStore(
    {
        reducer: {
            stock: StockSlice,
            company:companyDetailSlice
        }
    }
)
export default store;