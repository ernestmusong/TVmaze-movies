/* eslint-disable no-unused-vars */
/* eslint import/no-cycle: 0 */
import COMMENTS from './comments.js';
import SHOWS from './home.js';

const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const appsEndPoint = '/apps/';
const likesEndPoint = '/likes/';
const id = 'XNATi12fKSoLOZGUlPLg';
const popUpOverlay = document.querySelector('.popup-overlay');

export default class INTERACTIONS {
  static createAppId = async () => {
    try {
      const response = await fetch(baseUrl + appsEndPoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.text();
      return data;
    } catch (error) {
      return error;
    }
  };

  static postLike = async (movieId) => {
    try {
      const response = await fetch(
        baseUrl + appsEndPoint + id + likesEndPoint,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            item_id: movieId,
          }),
        },
      );
      const data = await response.text();
      return data;
    } catch (error) {
      return error;
    }
  };

  static createNewLike = (e) => {
    if (e.target.classList.contains('heart')) {
      popUpOverlay.classList.add('remove-popup');
      const id = e.target.getAttribute('id');
      INTERACTIONS.postLike(id).then((data) => {
        if (data === 'Created') {
          if (SHOWS.allShows.length) {
            const likedShow = SHOWS.allShows.find(
              (show) => Number(show.id) === Number(id),
            );
            if (likedShow) {
              likedShow.likes += 1;
            }
            SHOWS.renderMovies(SHOWS.allShows);
          }
        }
      });
    }
  };

  static removePopUp = (e) => {
    if (e.target.alt === 'close') {
      popUpOverlay.classList.add('remove-popup');
    }
  };

  static getLikes = async () => {
    try {
      const response = await fetch(
        baseUrl + appsEndPoint + id + likesEndPoint,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  };
}
