"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
    *[Symbol.iterator]() {
        const head = new ListNode(-1, this);
        while (head.next !== null && head.next.val >= 0) {
            yield head.next.val;
            head.next = head.next.next;
        }
    }
    static from(iteration) {
        const head = new ListNode(-1, null);
        let pointer = head;
        for (const val of iteration) {
            pointer.next = new ListNode(val, null);
            pointer = pointer.next;
        }
        return head.next;
    }
}
exports.ListNode = ListNode;
function addTwoNumbers(l1, l2) {
    let l1Val;
    let l2Val;
    const head = new ListNode(-1, null);
    let pointer = head;
    let carry = 0;
    while (l1 && l1.val >= 0 || l2 && l2.val >= 0 || carry > 0) {
        l1Val = l1 && l1.val || 0;
        l2Val = l2 && l2.val || 0;
        let sum = l1Val + l2Val + carry;
        carry = 0;
        if (sum >= 10) {
            sum -= 10;
            carry = 1;
        }
        pointer.next = new ListNode(sum, null);
        pointer = pointer.next;
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    return head.next;
}
exports.addTwoNumbers = addTwoNumbers;
