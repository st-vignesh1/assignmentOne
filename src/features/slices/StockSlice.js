import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import API_KEY from "../../constants/ApiKey"
import axios from "axios"
const initialState = {
    loading: false,
    stockData: [],
    error: ""
}

const stockSlice = createSlice({
    name: "stockSlice", initialState,
    reducers: {
        setStockDate(state, action) {
            state.stockData = action.payload;
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
        setLoading(false);
        console.log("response", response);
        dispatch(setStockDate(response?.data));
    } catch (error) {
        console.error('Error fetching stock data:', error);
        throw error;
    }
})

export const { setStockDate, setLoading } = stockSlice.actions

export default stockSlice.reducer;
