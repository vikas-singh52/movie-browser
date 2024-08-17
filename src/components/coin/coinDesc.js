

import { useSelector } from 'react-redux'
import styles from './CoinDesc.module.css'
const CoinDesc = () => {

  const {data} = useSelector(s=>s.eachcoin)
 console.log("coin Desc : ",data)
    return (
      < div className={styles.description} >
        <h2>{data.id}</h2>
        <p>{data.description.en}</p>
      </div>
    )
  }
  export default CoinDesc
  