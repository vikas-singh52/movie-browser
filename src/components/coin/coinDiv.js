
import { useSelector } from 'react-redux'
import './coinDivStyle.css'
const CoinDiv = () => {

  const {data,error} = useSelector(s=>s.eachcoin)
  console.log("coinDiv: ",data)
  
  return (
    < div className='card-div' >
      <p>{`${data.original_title} - ${data.tagline}`}</p>
      <p>{data.release_date}</p>
      <img style={{border: "1px solid red"}} src={data.backdrop_path} width="700px" height="400px" alt="coin-img"/>
        
    </div>
  )
}
export default CoinDiv
