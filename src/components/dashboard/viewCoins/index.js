
import '../viewCoins/style.css'
import {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import FetchAllBitcoins from '../../../redux-toolkit/actions/bitcoinsCall'
import GridCom from '../grid'
import ListCom from '../list'

const ViewCoinsCom = () => {
  const [ex, setEx] = useState(false)
  const [whichCom, setWhichCom] = useState(true)

  const dispatch = useDispatch()
  useEffect(()=>{
     dispatch(FetchAllBitcoins())
    console.log("viewCoins:")
  },[])

  function display(e){
    console.log(e.target.className)
    if(e.target.className == "grid"){
      setWhichCom(true)
    }
    else{
      setWhichCom(false)
    }
  }

  return (
    <div className="common-view">
       
       <div>
        {
        whichCom ?  <ListCom/>:<GridCom/>
        }
       </div>
    </div>
  )
}
export default ViewCoinsCom
