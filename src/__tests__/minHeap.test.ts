import { test, expect } from "@jest/globals";
import MinHeap from "@code/minHeap";

test("min heap", function () {
    const heap = new MinHeap();

    expect(heap.length).toEqual(0);

    heap.insert(5);
    heap.insert(3);
    heap.insert(69);
    heap.insert(420);
    heap.insert(4);
    heap.insert(1);
    heap.insert(8);
    heap.insert(7);

    expect(heap.length).toEqual(8);
    expect(heap.extract_min()).toEqual(1);
    expect(heap.extract_min()).toEqual(3);
    expect(heap.extract_min()).toEqual(4);
    expect(heap.extract_min()).toEqual(5);
    expect(heap.length).toEqual(4);
    expect(heap.extract_min()).toEqual(7);
    expect(heap.extract_min()).toEqual(8);
    expect(heap.extract_min()).toEqual(69);
    expect(heap.extract_min()).toEqual(420);
    expect(heap.length).toEqual(0);
});