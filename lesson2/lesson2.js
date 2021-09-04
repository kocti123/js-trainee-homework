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

  if (to < from) {
    console.log('swap');
    [to, from] = [from, to];
  }

  const newArr = [];
  for (let i = from - 1; i < to; i++) {
    if (typeof arr[i] !== 'number') continue;
    newArr.push(arr[i])
  }
  return newArr;
}

