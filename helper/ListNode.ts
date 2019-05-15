export class ListNode implements Iterable<number | undefined> {
  constructor(public val: number, public next: ListNode | null = null) {}

  public [Symbol.iterator](): Iterator<number | undefined> {
    let pointer: ListNode | null = this;
    return {
      next(): IteratorResult<number | undefined> {
        if(pointer !== null) {
          let curr = pointer;
          pointer = pointer.next;
          return {
            value: curr.val,
            done: false
          }
        } else {
          return {
            value: undefined,
            done: true
          }
        }
      }
    }
  }

  public static from(iteration: {
    [Symbol.iterator](): IterableIterator<number>;
  }): ListNode {
    const head = new ListNode(-1, null);
    let pointer: ListNode = head;

    for (const val of iteration) {
      pointer.next = new ListNode(val, null);
      pointer = pointer.next;
    }

    return head.next!;
  }
}

function* generateFibnacci(n: number) {
  let [prev, curr] = [1, 1];
  for(let i = 1; i <= n; i ++) {
    if(i <= 2) yield 1;
    else {
      [prev, curr] = [curr, prev + curr];
      yield curr
    } 
  }
}

let ret = generateFibnacci(2)

ret.next()