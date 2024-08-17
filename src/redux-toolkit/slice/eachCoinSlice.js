
import { createSlice } from '@reduxjs/toolkit'
import FetchEachCoin from '../actions/eachCoin'
const EachCoinSlice = createSlice({
    name: "eachcoin",
    initialState: {
        isLoad: false,
        data: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(FetchEachCoin.pending, (state)=>{
            state.isLoad = true;
        });
        builder.addCase(FetchEachCoin.fulfilled, (state, action)=>{
            state.isLoad = false;
            state.data = action.payload;
        });
        builder.addCase(FetchEachCoin.rejected, (state, action)=>{
            state.isLoad = false;
            state.error = action.error;
        });
    }

})
export default EachCoinSlice.reducer