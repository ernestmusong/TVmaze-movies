import './style.css';import { library, dom } from '@fortawesome/fontawesome-svg-core';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt';
import SHOWS from './home.js';

library.add(faTrashAlt);
dom.watch();

const form = document.querySelector('#form');
 
window.addEventListener('DOMContentLoaded', () => {
  SHOWS.getShows()
   
});

window.addEventListener('click', (e) => {
   
});


form.addEventListener('submit', (e) => {
  e.preventDefault();
   
});
