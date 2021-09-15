class Stack {
  #stack;
  #size;
  #current;

  constructor(size = 10) {
    if (!Number.isInteger(size)) {
      throw new Error('should be a integer');
    }

    this.#stack = Array(size);
    this.#current = -1;
    this.#size = size;
  }

  push(element) {
    if (this.#size === this.#current + 1) {
      throw new Error('exceeding size of stack');
    }

    this.#current += 1;
    this.#stack[this.#current] = element;
  }
  
  pop() {
    if (this.#current === -1) {
      throw new Error('stack is empty');
    }
    const retVal = this.#stack[this.#current];
    this.#stack[this.#current] = undefined;
    this.#current -= 1;
    return retVal;
  }

  peek() {
    if (this.#current === -1) return null;
    return this.#stack[this.#current];
  }

  toArray() {
    const newArr = [];
    for (let i = 0; i <= this.#current; i++) {
      newArr.push(this.#stack[i]);
    }
    return newArr;
  }

  isEmpty() {
    return this.#current === -1;
  }

  static fromIterable(iterable) {
    const elements = [...iterable];
    const stack = new Stack(elements.length);
    stack.#stack = elements;
    stack.#current = elements.length - 1;
    return stack;
  }
}

module.exports = { Stack };
