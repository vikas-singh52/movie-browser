import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const FetchAllBitcoins = createAsyncThunk("bitcoins/fetch", 
     async () => {
     //const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
      const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=c0ca1fc0f3c8da80621deefb817d9919'
     const res = await axios.get(url)
       return res.data.results
     }
)
export default FetchAllBitcoins