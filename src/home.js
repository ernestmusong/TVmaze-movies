 let url = 'https://api.tvmaze.com/search/shows?q=girls'

export default class SHOWS {
    static getShows = async ()=>{
            const res = await fetch(url)
            let data = await res.json();
            console.log(data)
            return data
    } 
 }