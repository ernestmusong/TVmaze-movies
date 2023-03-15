/* eslint import/extensions: 0 */
import './style.css'; import { library, dom } from '@fortawesome/fontawesome-svg-core';

import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import SHOWS from './home.js';

library.add(faHeart);
dom.watch();

window.addEventListener('DOMContentLoaded', () => {
  SHOWS.displayShows();
});
