import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    loading: true,
    stockData: [],
    error: ""
}

const stockSlice = createSlice({
    name: "stockSlice",
    reducers: {},
    extraReducers: {}
})