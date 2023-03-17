/* eslint import/no-cycle: 0 */
// eslint-disable-next-line no-unused-vars
import { text } from '@fortawesome/fontawesome-svg-core';
// eslint-disable-next-line no-unused-vars
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
      const input = document.querySelector('.input');
      const cmt = document.querySelector('textarea.comment');
      // console.log(input.value, cmt.value)
      if (input.value !== '' && cmt.length !== '') {
        console.log(input.value, cmt);
        comment.username = input.value;
        comment.comment = cmt.value;
        comment.item_id = e.target.id.toString();
        console.log(comment.username, comment.comment, comment.item_id);
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
        console.log(data);
        return data;
      } catch (error) {
        return error;
      }
    }

      static getComments = async (itemId) => {
        try {
          const res = await fetch(baseUrl + appsEndPoint + id + CommentEndPt + itemId, {
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

      static displayPopUp = (e, data) => {
        let result = '';
        let detail;
        if (e.target.classList.contains('comment-btn')) {
          detail = data.find((item) => Number(item.id) === Number(e.target.id));
          popUpOverlay.classList.remove('remove-popup');
          COMMENTS.getComments(e.target.id.toString()).then((comments) => {
            if (comments.length) {
              console.log(comments);
              detail.comments = comments.length || 0;
              detail.commentsList = comments;
              console.log(detail.commentsList);
              let detailResult = '';
              for (let i = 0; i < detail.commentsList.length; i += 1) {
                detailResult += `<li>${detail.commentsList[i].creation_date} ${detail.commentsList[i].username}: ${detail.commentsList[i].comment}</li>`;
              }
              result += `
              <div class="popup-card">
              <button id="desktop-popup-close">
                  <img src= ${closeIcon} alt="close">
             </button>
              <div class="popup-img-wrap">
                  <img src=${detail.image.medium} alt="popup">
                  <button id="popup-close">
                      <img id="close-img" src=${closeIcon} alt="close">
                 </button>
              </div>
              <div class="title-wrap">
                  <h2>${detail.name}</h2>
              </div>
              <div class="more-details-wrap">
                  <div class="more-details">
                      <p class="comment"><span class="origin">premiered</span>: ${detail.premiered}</p>
                      <p class="comment"><span class="origin">status</span>: ${detail.status}</p>
                  </div>
                  <div class="more-details align-right">
                      <p class="comment"><span class="origin">Country</span>: ${detail.network.country.name}</p>
                      <p class="comment"><span class="origin">Language</span>: ${detail.language}</p>
                  </div>
              </div>
              <div class="comment-wrap">
                  <p>comments <span id="comments-count">${detail.comments}</span></p>
              </div>
              <ul class="commentors">${detailResult}</ul>
              <div class="add-comment">
                  <p>Add a comment</p>
              </div>
              <form id=${detail.id} class="form" action="">
                  <label for="name">
                      <input class="input" type="text" name="name" required id="name" placeholder="Your name">
                  </label>
                  <label for="comment">
                      <textarea class="comment" id="comment" name="user_message" maxlength="500" placeholder="Message" required></textarea>
                  </label>
                  <div class="btn-container">
                      <button id=${detail.id} type="submit" class="btn">comment</button>
                  </div>
              </form>
            </div>
              `;
              popUpOverlay.innerHTML = result;
            }
          });
        }
      }
}
