type QNode<T> = {
    value: T;
    next?: QNode<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: QNode<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as QNode<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }

        node.next = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        const node = this.head as QNode<T>;
        this.length--;
        this.head = this.head?.next;

        return node.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
