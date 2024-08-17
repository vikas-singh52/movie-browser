let coinss = []
function AddToWatchlist(coin){
    console.log("watchlist",coin)
    
    if(coin){
        if(!coinss.includes(coin.id)){ coinss.push(coin.id) }
    }
    console.log("array",coinss)
    localStorage.setItem("coinss",JSON.stringify(coinss))
}
export default AddToWatchlist