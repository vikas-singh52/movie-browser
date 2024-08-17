import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./style.css";
import { useNavigate } from "react-router-dom";
const ListCom = () => {

  const [stateData, setData] = useState([])
  
  const { data } = useSelector((state) => state.bitcoins);
  const navigate = useNavigate();

  
  const AddToWatchlist = (id) => {
      
      if (!stateData.includes(id)) {
        console.log("hi")
        setData([...stateData, id]) 
      }
      alert("Item added to watchlist")
  };
  console.log("hlo")
  localStorage.setItem("watchlist", JSON.stringify(stateData));
  return (
    <div className="list-cards">
      {/* <table>
            <tbody>
              {
                data?.map((ele,i)=>(
                  <tr key={i} onClick={()=>navigate(`/coin/${ele.id}`)}>
                    <td><img src={ele.image} width="50px" height="50px"/></td>
                    <td>
                      <span>{ele.symbol.toUpperCase()}</span>
                      <span>{id = ele.id.charAt(0).toUpperCase()+ ele.id.slice(1)}</span>
                      <span>${ele.current_price}</span>
                      <span>${ele.total_volume}</span>
                      <span>${ele.market_cap}</span>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table> */}
      {data?.map((ele, i) => (
        <div className="list-movies" key={i}>
          <img src={ele.poster_path} width="50px" />

          <div style={{ width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p onClick={() => navigate(`/coin/${ele.id}`)}>{ele.title}</p>
              <button onClick={() => AddToWatchlist(ele.id)}>
                Add to wathlist
              </button>
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
  );
};
export default ListCom;

/*
import React from "react";
const ListCom = ()=>{
  return(
    <div>
      Hello I am List
    </div>
  )
}
export default ListCom

*/
