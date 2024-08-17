
export function ToDate(num){
    const D = new Date(parseInt(num))
    const day = D.getDate()
    const month = D.getMonth() + 1
    const d = `${day}/${month}`
    return d
}