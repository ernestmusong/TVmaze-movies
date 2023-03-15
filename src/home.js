import { result } from 'lodash';

const url = 'https://api.tvmaze.com/search/shows?q=girls';
const showsContainer = document.querySelector('.shows-container');
const count = document.querySelector('#count');

export default class SHOWS {
    static getShows = async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }

    static displayShows() {
      SHOWS.getShows().then((data) => {
        count.textContent = `(${data.length})`;
        let result = '';
        for (let i = 0; i < data.length; i += 1) {
          result += `
            <article class="show">
            <div class="img-wrap">
                <img class="show-img" src="${data[i].show.image.medium}" alt="image">
            </div>
            <div class="likes-conatainer">
                <p class="name">${data[i].show.name}</p>
                <button class="like-btn" id=${data[i].show.id} class="comment-btn"><i class="fas fa-heart"></i></button>
                
            </div>
            <div class="likes-value-wrap">
                <p><span class="value">0</span><span>likes</span></p>
            </div>
            <button id=${data[i].show.id} class="comment-btn">comments</button>
        </article>
            `;
          showsContainer.innerHTML = result;
        }
      });
      return result;
    }
}