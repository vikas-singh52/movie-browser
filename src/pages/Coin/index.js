import CoinChart from "../../components/coin/coinChart"
import CoinDesc from "../../components/coin/coinDesc"
import Header from "../../components/common/header"
import CoinDiv from "../../components/coin/coinDiv"
import { useParams } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { useEffect, useState } from "react"
import FetchEachCoin from "../../redux-toolkit/actions/eachCoin"

const Coin = () => {
  const [ren, setRen] = useState(false)
    const {coinId} = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
      async function fetchD(){
        await dispatch(FetchEachCoin(coinId))
        setRen(true)
      }
      fetchD()
    },[])

  return (
    < div >
      <Header/>
      <CoinDiv/>
        
 
      {/* <CoinChart coinId={coinId}/>
      {
          ren ? <CoinDesc/>:<></>
        } */}
    </div>
  )
}
export default Coin
