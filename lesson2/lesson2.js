function makeObjectDeepCopy(objToCopy) {
  const objCopy = Array.isArray(objToCopy) ? [] : {};

  for (const entires of Object.entries(objToCopy)) {
    if (entires[1] !== null && typeof entires[1] === 'object') {
      objCopy[entires[0]] = makeObjectDeepCopy(entires[1]);
    } else {
      objCopy[entires[0]] = entires[1];
    }
  }
  return objCopy;
}

function selectFromInterval(arr, from, to) {
  if (!Array.isArray(arr)) {
    throw new TypeError('first arguments must be array')
  }
  for (const number of arr) {
    if (typeof number !== 'number') {
      throw new TypeError('all values in first argument must be numbers');
    }
  }
  if (!Number.isInteger(from) || !Number.isInteger(to)) {
    throw new TypeError('second and third arguments must be integers')
  }

  if (to < from) [to, from] = [from, to];

  return arr.filter((num) => {
    if (num >= from && num <= to) {
      return true;
    }
    return false;
  });
}

const myIterable = {
  from: 4,
  to: 4,
  [Symbol.iterator]: function () {
    if (!Number.isInteger(this.from) || !Number.isInteger(this.to)) {
      throw new TypeError('from and to must be present and be finite numbers')
    }
    if (this.to < this.from) {
      throw new RangeError('to must be greater than from')
    }

    const iterator = function* () {
      for (let value = this.from; value <= this.to; value++) {
        yield value;
      }
    }
    return iterator.call(this);
  }
}
