
import {configureStore} from '@reduxjs/toolkit'
import BitcoinsSlice from './slice/bitcoinsSlice'
import EachCoinSlice from './slice/eachCoinSlice'


const Store = configureStore({
    reducer : {
        bitcoins: BitcoinsSlice,
        eachcoin: EachCoinSlice
    }
})
export default Store