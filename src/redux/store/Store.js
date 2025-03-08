import { configureStore } from "@reduxjs/toolkit";
import StockSlice from "../reducers/stockReducer"
const store = configureStore(
    {
        reducer: {
            stock: StockSlice
        }
    }
)
export default store;