/**
 * @jest-environment jsdom
 */

// TEST FOR ITEMS COUNTER
import SHOWS from './src/home.js';

const itemsArray = [];
const mockedApiLength = 20;
let count = 0; // count displays items count
const updateCount = (array) => {
  for (let i = 0; i < mockedApiLength; i += 1) {
    array.push(i);
    count = array.length;
  }
  return array;
};

//  TEST FOR COMMENTS COUNTER
const comments = [];
let commentsCount = 0;
const comment = {
  item_id: '',
  username: '',
  comment: '',
};

const inputField = document.createElement('input');
inputField.value = 'ernest';
const textArea = document.createElement('textarea');
textArea.value = 'My comment';

const addComment = () => {
  if (inputField.value.length !== 0) {
    comment.username = inputField.value;
    comment.comment = textArea.value;
    comments.push(comment);
    commentsCount = comments.length;
  }
};

describe('counters', () => {
  test('update items count', () => {
    updateCount(itemsArray);
    expect(count).toBe(20);
  });

  test('update comments count', () => {
    addComment();
    expect(commentsCount).toBe(1);
  });
});

describe('SHOWS', () => {
  describe('getItemCount', () => {
    it('returns the correct number of items', () => {
      const shows = [{}, {}, {}];
      SHOWS.allShows = shows;
      expect(SHOWS.getItemCount()).toEqual(3);
    });
  });

  describe('getCommentCount', () => {
    it('returns the correct number of comments', () => {
      const shows = [{ comments: [{}, {}] },
        { comments: [{}, {}, {}] },
        { comments: [] },
      ];
      SHOWS.allShows = shows;
      expect(SHOWS.getCommentCount()).toEqual(5);
    });
  });
});
