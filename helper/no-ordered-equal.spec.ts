import { noOrderedDeepEqual } from './no-ordered-equal';

describe('no ordered deep equal', function() {
  test('number', function() {
    expect(noOrderedDeepEqual(1, 1)).toEqual(true);
    expect(noOrderedDeepEqual(1, 2)).toEqual(false);
    expect(noOrderedDeepEqual(NaN, NaN)).toEqual(true);
  });

  test('undefined', function() {
    expect(noOrderedDeepEqual(undefined, undefined)).toEqual(true);
    expect(noOrderedDeepEqual(undefined, null)).toEqual(false);
  });

  test('null', function() {
    expect(noOrderedDeepEqual(null, null)).toEqual(true);
    expect(noOrderedDeepEqual({}, null)).toEqual(false);
  });

  test('boolean', function(){
    expect(noOrderedDeepEqual(false, true)).toEqual(false);
    expect(noOrderedDeepEqual(false, false)).toEqual(true);
  });

  test('string', function() {
    expect(noOrderedDeepEqual('asdf', 'asdf')).toEqual(true);
    expect(noOrderedDeepEqual('adf', 'a')).toEqual(false);
  })

  test('object', function() {
    expect(noOrderedDeepEqual({a: 12, b: 14}, {a: 12, b: 14})).toEqual(true);
    expect(noOrderedDeepEqual({a: 12}, {a: 13})).toEqual(false);
  })

  describe('array', function() {
    test('normal', function() {
      expect(noOrderedDeepEqual([1, null, undefined], [1, null, undefined])).toEqual(true);
      expect(noOrderedDeepEqual([1, 0], [1, 0, undefined])).toEqual(false);
    });

    test('no ordered array', function() {
      expect(noOrderedDeepEqual([1, 2, 3], [3, 2, 1])).toEqual(true);
      expect(noOrderedDeepEqual([{}, {a: 12, b: 13}], [{a: 12, b: 13}, {}])).toEqual(true);
    })
  })
})