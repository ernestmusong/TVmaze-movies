/**
 * @jest-environment jsdom
 */

// TEST FOR ITEMS COUNTER
let itemsArray = [];
let mockedApiLength = 20
let count = 0 // count displays items count
const updateCount = (array) => {
    for(let i = 0; i < mockedApiLength; i += 1){
        array.push(i)
        count = array.length
    }
    return array
}

describe('todo', () => {
  test('update items count', () => {
    updateCount(itemsArray);
    expect(count).toBe(20);
  });
   
  });