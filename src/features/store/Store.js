import { configureStore } from "@reduxjs/toolkit";
import StockSlice from "../slices/StockSlice"
const store = configureStore(
    {
        reducer: {
            stock: StockSlice
        }
    }
)
export default store;