/* eslint import/extensions: 0 */
import './style.css'; import { library, dom } from '@fortawesome/fontawesome-svg-core';

import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import SHOWS from './home.js';
import INTERACTIONS from './interations.js';

library.add(faHeart);
dom.watch();

window.addEventListener('DOMContentLoaded', () => {
  INTERACTIONS.createAppId()
  SHOWS.displayShows();
  INTERACTIONS.getLikes()
});

window.addEventListener('click', (e) => {
  SHOWS.getShows().then(data => {
    for(let i = 0; i < data.length; i += 1) {
        if(e.target.id.toString() === data[i].show.id.toString() && e.target.alt === 'image') {
            INTERACTIONS.createNewLike(e.target.id)
        }
    }
 })
})
