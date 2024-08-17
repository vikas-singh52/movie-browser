import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Watchlist = ()=>{
    
    
    const { data } = useSelector((state) => state.bitcoins);
    const navigate = useNavigate();
   

    return(
    <div>
       {
        data?.filter(filterEle => {
            
            let arr = localStorage.getItem("watchlist")
            let actualObj = JSON.parse(arr)
            for(let i of actualObj){
                if(filterEle.id==i){
                    return filterEle
                }
            }
        }).map((ele, i) => (
        <div className="list-movies" key={i}>
            
          <img src={ele.poster_path} width="50px" />

          <div style={{ width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p onClick={() => navigate(`/coin/${ele.id}`)}>{ele.title}</p>
              
            </div>

            <p style={{ marginTop: "-5px" }}>
              {ele.release_date.split("-")[0]}
            </p>

            <p>{ele.overview}</p>
            {/* <p>{id = ele.id.charAt(0).toUpperCase()+ ele.id.slice(1)}</p> */}
            <hr />
          </div>
        </div>
      ))}
    </div>
    )
}
export default Watchlist