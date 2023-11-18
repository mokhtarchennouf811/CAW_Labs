const {first,add,last,chunk} = require('./echo');
//  simple test
test('additon', ()=>{
    expect(add(5,3)).toBe(2)
});

// "Last" Function test

describe('last function', () => {
  test('returns an empty array when input array is null', () => {
    expect(last(null)).toEqual([]);
  });

  test('returns the last element when n is not provided', () => {
    expect(last([1, 2, 3])).toBe(3);
  });

  test('returns an empty array when input array is empty', () => {
    expect(last([], 2)).toEqual([]);
  });
});

// "First" Function test

describe('first function', () => {
  test('returns an empty array when input array is null', () => {
    expect(first(null)).toEqual([]);
  });

  test('returns an empty array when n is less than or equal to 0', () => {
    expect(first([1, 2, 3], 0)).toEqual([]);
    expect(first([1, 2, 3], -1)).toEqual([]);
  });

  test('returns the first element when n is not provided', () => {
    expect(first([1, 2, 3])).toBe(1);
  });

  test('returns an empty array when input array is empty', () => {
    expect(first([], 2)).toEqual([]);
  });
});

// "Chunk" function test

test("chunk function returns an array of arrays of size n", () => {
  const array = [1, 2, 3, 4, 5];
  const result = chunk(array, 2);
  expect(result).toEqual([[1, 2], [3, 4], [5]]);
});

test('returns an empty array when size is less than or equal to 0', () => {
  const array = [1, 2, 3];
  const result = chunk(array, -1);
  expect(result).toEqual([]);
});