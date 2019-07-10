import { removeElement } from "./removeElement";
import { removeElement as removeElementExchange } from "./removeElement.exchange";

const methods = [removeElement, removeElementExchange];

describe("removeElement", function() {
  methods.forEach(removeElement => {
    test("[3, 2, 2, 3]", function() {
      const arr = [3, 2, 2, 3];
      const tail = removeElement(arr, 3);
      expect(tail).toEqual(2);
      expect(new Set(arr.slice(0, tail))).toEqual(new Set([2, 2]));
    });

    test("[0, 1, 2, 2, 3, 0, 4, 2]", function() {
      const arr = [0, 1, 2, 2, 3, 0, 4, 2];
      const tail = removeElement(arr, 2);
      expect(tail).toEqual(5);
      expect(new Set(arr.slice(0, 5))).toEqual(new Set([0, 1, 3, 0, 4]));
    });

    test("[1]", function() {
      const arr = [1];
      expect(removeElement(arr, 1)).toEqual(0);
    });
  });
});
