/* eslint import/extensions: 0 */
import './style.css'; import { library, dom } from '@fortawesome/fontawesome-svg-core';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt';
import SHOWS from './home.js';

library.add(faTrashAlt);
dom.watch();

window.addEventListener('DOMContentLoaded', () => {
  SHOWS.getShows();
});
