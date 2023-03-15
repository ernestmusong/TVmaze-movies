import { result } from 'lodash';
import heart from './assets/images/heart.png';
import INTERACTIONS from './interations.js';

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
          INTERACTIONS.getLikes().then(likes => {
            console.log(likes)
            //  let item = likes.find(like => like.item_id.toString() === data[i].show.id.toString())
             let numberOfLikes = likes[i].likes
             let item_id = likes[i].item_id.toString()
             let showId = data[i].show.id.toString()
             let value;
             if(likes[i].item_id.toString() === data[i].show.id.toString()) {
              value = likes[i].likes
             }

            result += `
            <article class="show">
            <div class="img-wrap">
                <img class="show-img" src="${data[i].show.image.medium}" alt="image">
            </div>
            <div class="likes-conatainer">
                <p class="name">${data[i].show.name}</p>
                   <img id=${data[i].show.id} class="heart"src=${heart} alt="image">
            </div>
            <div class="likes-value-wrap">
                <p><span class="value">${value}</span><span>likes</span></p>
            </div>
            <button id=${data[i].show.id} class="comment-btn">comments</button>
        </article>
            `;
            showsContainer.innerHTML = result; 
          })
          
        }
      });
      return result;
    }
}