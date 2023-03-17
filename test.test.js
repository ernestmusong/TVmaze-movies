/**
 * @jest-environment jsdom
 */

// TEST FOR ITEMS COUNTER
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

describe('todo', () => {
  test('update items count', () => {
    updateCount(itemsArray);
    expect(count).toBe(20);
  });
});