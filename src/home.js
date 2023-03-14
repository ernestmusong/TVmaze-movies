const url = 'https://api.tvmaze.com/search/shows?q=girls';

export default class SHOWS {
    static getShows = async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }
}