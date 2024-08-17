

export const GetPriceData = async (id) => {
     const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`
       const res = await fetch(url)
       const data = await res.json()
       
        return data.prices
     }
     export const GetMaketData = async (id) => {
      const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`
        const res = await fetch(url)
        const data = await res.json()
        console.log("cal",data.market_caps)
        return data.market_caps
      }
      export const GetVolumeData = async (id) => {
        const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`
          const res = await fetch(url)
          const data = await res.json()
          
         return data.total_volumes
        }