class Node {
  constructor(value, prev) {
    this.value = value;
    this.prev = prev;
  }
}

class Stack {
  #top;
  #maxSize;
  #curSize;

  constructor(size = 10) {
    if (!Number.isInteger(size)) {
      throw new Error('should be a integer');
    }

    this.#curSize = 0;
    this.#maxSize = size;
  }

  push(value) {
    if (this.#maxSize === this.#curSize) {
      throw new Error('exceeding size of stack');
    }

    this.#top = new Node(value, this.#top);
    this.#curSize += 1;
  }

  pop() {
    if (this.#curSize === 0) {
      throw new Error('stack is empty');
    }

    const last = this.#top;
    this.#top = last.prev;
    this.#curSize -= 1;

    return last.value;
  }

  peek() {
    if (this.#curSize === 0) return null;
    return this.#top.value;
  }

  toArray() {
    const arr = [];
    let current = this.#top;

    while (current) {
      arr.push(current.value);
      current = current.prev;
    }

    return arr.reverse();
  }

  isEmpty() {
    return this.#curSize === 0;
  }

  static fromIterable(iterable) {
    const elements = [...iterable]
    const newStack = new Stack(elements.length);

    for (let elem of elements) {
      newStack.push(elem);
    }

    return newStack;
  }
}

module.exports = { Stack };
