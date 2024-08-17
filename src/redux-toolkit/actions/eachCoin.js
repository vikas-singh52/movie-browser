
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const FetchEachCoin = createAsyncThunk("eachCoin/fetch", 
     async (ecoin) => {
     //const url = `https://api.coingecko.com/api/v3/coins/${ecoin}`
      const url = `https://api.themoviedb.org/3/movie/${ecoin}?api_key=c0ca1fc0f3c8da80621deefb817d9919`
       const res = await axios.get(url)
       console.log("calling Function",res.data)
       return res.data
     }
)
export default FetchEachCoin
