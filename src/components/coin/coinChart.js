import styles from './CoinChart.module.css'
import {Line} from 'react-chartjs-2'
import { Chart as Chartjs } from 'chart.js/auto'
import { useEffect, useState } from 'react'
import {GetPriceData, GetMaketData, GetVolumeData } from '../../functions/getPriceData'
import { ToDate } from '../../functions/convertToDate'

const CoinChart = ({coinId}) => {

  const tabs = [
    {
      id: 1,
      title: "PRICE",
      val:"prices"  
    },
    {
      id: 2,
      title: "MKT CAP",
      val:"market_caps"
    },
    {
      id: 3,
      title: "VOLUME" ,
      val:"total_volumes"  
    }
  ]

  const [chartData, setChartData] = useState([])
  const [chartState, setChartState] = useState("prices")
  console.log("chartState:",chartState)
  
   useEffect(  ()=>{
    async function fetch(){
    if(chartState=="prices"){
      const data = await GetPriceData(coinId)
       setChartData(data)
    }
    else if(chartState=="market_caps"){
      const mdata = await GetMaketData(coinId)
       setChartData(mdata)
       console.log("Chart Data :",chartData)
    }
    else if(chartState=="total_volumes"){
      const data = await GetVolumeData(coinId)
       setChartData(data)
    }}
    fetch()
  },[chartState])

  const [selectedTab, setSelectedTab] = useState(0)
  function handleTabs(index){
    setSelectedTab(index)
    setChartState(tabs[selectedTab].val)
  }
  return (
    < div className={styles.chart}>
      Hello coin chart
      <div className={styles.buttons}>
      {   
        
        tabs?.map((tab,i)=>(
          
            <button key={i} onClick={()=>handleTabs(i)} className={`${selectedTab === i? styles.active:""}`}>{tab.title}</button>
          
        ))
      }
      </div>
      {/* <div className={styles.buttons}>
        <button onClick={()=>setChartState("prices")}>PRICE</button>
        <button onClick={()=>setChartState("market_caps")}> MKT CAP</button>
        <button onClick={()=>setChartState("total_volumes")}>VOLUME</button>
      </div> */}
      {
        chartData?.length>0 ? <Line
        data = {{
         labels: chartData?.map((ele)=> ToDate(ele[0])) ,
         datasets: [
         {
          label: "",
           data: chartData?.map((ele)=> (ele[1])),
           
           
         },
         ],
        }}
       />:<></>
      }
    </div>
  )
}
export default CoinChart


