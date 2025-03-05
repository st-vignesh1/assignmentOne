import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"

import axios from "axios"
const initialState = {
    loading: false,
    stockData: [],
    topGainers: [],
    topLosers: [],
    error: ""
}

const stockSlice = createSlice({
    name: "stockSlice", initialState,
    reducers: {
        setStockDate(state, action) {
            state.stockData = action.payload;
            state.topGainers = action.payload.top_gainers;
            state.topLosers = action.payload.top_losers;
        },
        setLoading(state, action) {
            state.loading = action.payload
        }
    },
});

export const fetchStockData = createAsyncThunk('stockSlice/fetchStockData', async (params, { dispatch }) => {
    try {
        console.log("in thunk")
        dispatch(setLoading(true));
        const response = await axios.get("src/data/StockData.json");
        if (response.statusText !== "OK") {
            setLoading(false);
            throw new Error("Some Error Ocuured!")
        }
        setLoading(false);
        dispatch(setStockDate(response?.data));
    } catch (error) {
        console.error('Error fetching stock data:', error);
        throw error;
    }
})

export const { setStockDate, setLoading } = stockSlice.actions

export default stockSlice.reducer;
