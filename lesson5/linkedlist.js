class LinkedList {
  #firstElement;
  #lastElement;

  append(value) {
    const node = {
      value,
      next: null
    }
    if (!this.#firstElement) {
      this.#firstElement = node;
      this.#lastElement = node;
      return;
    }
    this.#lastElement.next = node;
    this.#lastElement = node;
  }

  prepend(value) {
    const node = {
      value,
      next: null
    }
    if (!this.#firstElement) {
      this.#firstElement = node;
      this.#lastElement = node;
      return;
    }
    node.next = this.#firstElement;
    this.#firstElement = node;
  }

  find(value) {
    let current = this.#firstElement;
    while (current) {
      if (value === current.value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  toArray() {
    const arr = [];
    let current = this.#firstElement;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

  static fromIterable(iterable) {
    const newList = new LinkedList();
    for (let elem of iterable) {
      newList.append(elem);
    }
    return newList;
  }
}

module.exports = { LinkedList };
