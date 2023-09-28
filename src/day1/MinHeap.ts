export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }
    private leftChild(idx: number): number {
        return idx * 1 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 1 + 2;
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }
        const parent = this.parent(idx);
        const parentValue = this.data[parent];
        const value = this.data[idx];

        if (value < parentValue) {
            this.data[idx] = parentValue;
            this.data[parent] = value;
            this.heapifyUp(parent);
        }
    }

    private heapifyDown(idx: number): void {
        const leftChild = this.leftChild(idx);
        const rightChild = this.rightChild(idx);
        if (idx >= this.length || leftChild >= this.length) {
            return;
        }
        const value = this.data[idx];
        const lValue = this.data[leftChild];
        const rValue = this.data[rightChild];

        if (rValue > lValue && lValue < value) {
            this.data[idx] = lValue;
            this.data[leftChild] = value;
            this.heapifyDown(leftChild);
        } else if (lValue > rValue && rValue < value) {
            this.data[idx] = rValue;
            this.data[rightChild] = value;
            this.heapifyDown(rightChild);
        }
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        const out = this.data[0];
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }
}
