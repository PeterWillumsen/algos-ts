export default class Stack<T> {
    public length: number;
    private head?: ListNode<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        this.length++;
        const node:ListNode<T> = { value: item, next: this.head };
        this.head = node;
    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        const head = this.head;
        this.head = this.head.next;
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
