/* eslint import/extensions: 0 */
import './style.css'; import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import SHOWS from './home.js';
import INTERACTIONS from './interations.js';
import COMMENTS from './comments.js';

const popUpOverlay = document.querySelector('.popup-overlay');
library.add(faHeart);
dom.watch();

window.addEventListener('DOMContentLoaded', () => {
  INTERACTIONS.createAppId();
  SHOWS.displayShows();
  INTERACTIONS.getLikes();
  COMMENTS.getComments();
});

window.addEventListener('click', (e) => {
  INTERACTIONS.createNewLike(e);
  INTERACTIONS.removePopUp(e);
  if (e.target.id === 'submit-btn') {
    COMMENTS.createNewComment(e);
    popUpOverlay.classList.remove('remove-popup');
  }
});
