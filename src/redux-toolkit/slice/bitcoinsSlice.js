
import { createSlice } from '@reduxjs/toolkit'
import FetchAllBitcoins from '../actions/bitcoinsCall'
const BitcoinsSlice = createSlice({
    name: "bitcoins",
    initialState: {
        isLoad: false,
        data: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(FetchAllBitcoins.pending, (state)=>{
            state.isLoad = true;
        });
        builder.addCase(FetchAllBitcoins.fulfilled, (state, action)=>{
            state.isLoad = false;
            state.data = action.payload;
        });
        builder.addCase(FetchAllBitcoins.rejected, (state, action)=>{
            state.isLoad = false;
            state.error = action.error;
        });
    }

})
export default BitcoinsSlice.reducer