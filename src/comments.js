/* eslint import/no-cycle: 0 */
import SHOWS from './home.js';
import closeIcon from './assets/images/closeIcon.png';

const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const appsEndPoint = '/apps/';
const commentsEndPoint = '/comments/';
const CommentEndPt = '/comments?item_id=';
const id = 'sRPHgjJhQMGqpfqhsriS';
const popUpOverlay = document.querySelector('.popup-overlay');

const comment = {
  item_id: '',
  username: '',
  comment: '',
};

export default class COMMENTS {
    static createNewComment = async (e) => {
      if (e.target.value.length !== 0) {
        comment.item_id = e.target.id;
        comment.username = e.target.value;
        comment.comment = e.target.value;
      }
      try {
        const response = await fetch(baseUrl + appsEndPoint + id + commentsEndPoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify(comment),
        });
        const data = await response.text();
        return data;
      } catch (error) {
        return error;
      }
    }

      static getComments = async () => {
        try {
          const res = await fetch(baseUrl + appsEndPoint + id + CommentEndPt + comment.item_id, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },

          });
          const data = await res.text();
          return data;
        } catch (error) {
          return error;
        }
      }

      static displayPopUp = (e) => {
        let allComments = '';
        let count;
        let result = '';
        SHOWS.getShows().then((data) => {
          const detail = data.find((item) => item.show.id.toString() === e.target.id.toString());
          COMMENTS.getComments().then((comments) => {
            count = comments.length;
            comments.map((item) => {
              allComments += `
                <li class="comment"><span>${item.creation_date} ${item.username}:</span>${item.comment}</li>
                `;
              return allComments;
            });
          });
          result += `
            <div class="popup-card">
            <button id="desktop-popup-close">
                <img src= ${closeIcon} alt="close">
           </button>
            <div class="popup-img-wrap">
                <img src=${detail.show.image.medium} alt="popup">
                <button id="popup-close">
                    <img id="close-img" src=${closeIcon} alt="close">
               </button>
            </div>
            <div class="title-wrap">
                <h2>${detail.show.name}</</h2>
            </div>
            <div class="more-details-wrap">
                <div class="more-details">
                ${detail.show.summary}
                </div>
                <div class="more-details align-right">
                    <p class="comment"><span class="origin">Country</span>: ${detail.show.network.country.name}</p>
                    <p class="comment"><span class="origin">Language</span>: ${detail.show.language}</p>
                </div>
            </div>
            <div class="comment-wrap">
                <p>comments <span>(${count})</span></p>
            </div>
            <ul class="commentors">${allComments}</ul>
            <div class="add-comment">
                <p>Add a comment</p>
            </div>
            <form id="form" action="">
                <label for="name">
                    <input type="text" name="name" required id="name" placeholder="Your name">
                </label>
                <label for="comment">
                    <textarea id="comment" name="user_message"  maxlength="500" placeholder="Message" required></textarea>
                </label>
                <div class="btn-container">
                    <button id=${detail.show.id} type="submit" class="btn">comment</button>
                </div>
            </form>
            `;
          popUpOverlay.innerHTML = result;
        });
        return result;
      }
}