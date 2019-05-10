import { threeSumClosest } from "./threeSumClosest";

describe('three sum closest', function() {
  test('[-1, 2, 1, -4]', function() {
    expect(threeSumClosest([-1, 2, 1, -4], 1)).toEqual(2);
  })
})