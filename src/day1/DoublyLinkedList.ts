type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};
export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("No ");
        } else if (idx === this.length) {
            this.append(item);
        } else if (idx === 0) {
            this.prepend(item);
        }
        this.length++;

        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr?.next;
        }
        curr = curr as Node<T>;
        const node = { value: item } as Node<T>;

        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node;
        if (curr.prev) {
            curr.prev.next = curr;
        }
    }
    append(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }
    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) {
            if (curr.value === item) {
                break;
            }
            curr = curr.next;
        }
        if (!curr) {
            return;
        }

        this.length--;
        if (this.length === 0) {
            this.head = this.tail = undefined;
            return;
        }

        if (curr.prev) {
            curr.prev = curr.next;
        }
        if (curr.next) {
            curr.next = curr.prev;
        }

        if (curr === this.head) {
            this.head = curr.next;
        }

        if (curr === this.tail) {
            this.tail = curr.prev;
        }

        curr.next = curr.prev = undefined;
        return curr.value;
    }
    get(idx: number): T | undefined {
        let curr = this.head as Node<T> | undefined;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }
        return curr?.value;
    }
    removeAt(idx: number): T | undefined {
        let curr = this.head as Node<T> | undefined;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        if (!curr) {
            return undefined;
        }
        this.removeNode(curr);
    }

    private removeNode(node: Node<T>): T | undefined {
        if (!node) {
            return;
        }

        this.length--;
        if (this.length === 0) {
            const val = this.head?.value;
            this.head = this.tail = undefined;
            return val;
        }

        if (node.prev) {
            node.prev = node.next;
        }
        if (node.next) {
            node.next = node.prev;
        }

        if (node === this.head) {
            this.head = node.next;
        }

        if (node === this.tail) {
            this.tail = node.prev;
        }

        node.next = node.prev = undefined;
        return node.value;
    }
}
