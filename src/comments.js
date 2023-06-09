/* eslint-disable consistent-return */
/* eslint import/no-cycle: 0 */
// eslint-disable-next-line no-unused-vars
import SHOWS from './home.js';
import closeIcon from './assets/images/closeIcon.png';

const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const appsEndPoint = '/apps/';
const commentsEndPoint = '/comments/';
const CommentEndPt = '/comments?item_id=';
const id = 'sRPHgjJhQMGqpfqhsriS';
const popUpOverlay = document.querySelector('.popup-overlay');
let counter = 0;

const comment = {
  item_id: String,
  username: String,
  comment: String,
};

let submitbtn;

export default class COMMENTS {
    static createNewComment = () => {
      submitbtn.addEventListener('click', async (e) => {
        const input = document.querySelector('.input');
        const cmt = document.querySelector('textarea.comment');
        if (input.value !== '' && cmt.length !== '') {
          comment.username = input.value;
          comment.comment = cmt.value;
          comment.item_id = e.target.id.toString();

          try {
            const response = await fetch(baseUrl + appsEndPoint + id + commentsEndPoint, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(comment),
            });
            const data = await response.text();
            // Display the new comment on the screen
            const currentDate = new Date();
            const cDay = (`0${currentDate.getDate()}`).slice(-2);
            const cMonth = (`0${currentDate.getMonth() + 1}`).slice(-2);// add leading zero for single digit month
            const cYear = currentDate.getFullYear();
            const date = `${cYear}-${cMonth}-${cDay}`;
            const commentCount = document.querySelector('#comments-count');
            const commentList = document.querySelector('.commentors');
            const newComment = `<li>${date} ${comment.username}: ${comment.comment}</li>`;
            commentList.insertAdjacentHTML('beforeend', newComment);
            const value = JSON.parse(data).length;
            if (value) {
              commentCount.textContent = value + 1;
            }

            return data;
          } catch (error) {
            return error;
          }
        }
      });
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

      static commentsCount = (comments) => {
        const count = comments ? comments.length : 0;
        return count;
      }

      static displayPopUp = (e) => {
        if (e.target.classList.contains('comment-btn') || e.target.classList.contains('submitbtn')) {
          const id = e.target.getAttribute('id');
          const detail = SHOWS.allShows.find((item) => Number(item.id) === Number(e.target.id));
          let detailResult = '';
          COMMENTS.getComments(id).then((comments) => {
            if (comments.length) {
              const allComments = JSON.parse(comments);
              counter = COMMENTS.commentsCount(allComments);
              allComments.forEach((comment) => {
                detailResult += `<li>${comment.creation_date} ${comment.username}: ${comment.comment}</li>`;
              });
            }

            const popup = `<div class="popup-card">
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
                  <p>comments <span id="comments-count">${counter}</span></p>
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
                      <button id=${detail.id} type="submit" class="submitbtn">comment</button>
                  </div>
              </form>
            </div>
              `;
            popUpOverlay.innerHTML = popup;
            popUpOverlay.classList.remove('remove-popup');
            submitbtn = document.querySelector('.submitbtn');
            COMMENTS.createNewComment();
          });
        }
      }
}
