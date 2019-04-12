"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addTwoNumbers_1 = require("./addTwoNumbers");
describe('add two numbers', function () {
    test('[2, 4, 3], [5, 6, 4]', function () {
        const l1 = addTwoNumbers_1.ListNode.from([2, 4, 3]);
        const l2 = addTwoNumbers_1.ListNode.from([5, 6, 4]);
        expect(Array.from(addTwoNumbers_1.addTwoNumbers(l1, l2))).toEqual([7, 0, 8]);
    });
    test('[0], [0]', function () {
        const l1 = addTwoNumbers_1.ListNode.from([0]);
        const l2 = addTwoNumbers_1.ListNode.from([0]);
        const list = addTwoNumbers_1.addTwoNumbers(l1, l2);
        expect(Array.from(list)).toEqual([0]);
    });
});
