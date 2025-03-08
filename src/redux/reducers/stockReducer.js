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
        setStockData(state, action) {
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
        dispatch(setLoading(true));
        const response = await axios.get("src/data/StockData.json");
        if (response.statusText !== "OK") {
            dispatch(setLoading(false));
            throw new Error("Some Error Ocuured!")
        }
        dispatch(setLoading(false));
        setTimeout(()=>{dispatch(setStockData(response?.data))},2000)
    } catch (error) {
        console.error('Error fetching stock data:', error);
        throw error;
    }
})

export const { setStockData, setLoading } = stockSlice.actions

export default stockSlice.reducer;
