class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  #top;
  #bottom;

  append(value) {
    const node = new Node(value);

    if (!this.#bottom) {
      this.#bottom = node;
      this.#top = node;
    } else {
      this.#top.next = node;
      this.#top = node;
    }
  }

  prepend(value) {
    const node = new Node(value, this.#bottom);

    if (!this.#bottom) {
      this.#bottom = node;
      this.#top = node;
    } else {
      this.#bottom = node;
    }
  }

  find(value) {
    let current = this.#bottom;

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
    let current = this.#bottom;

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
