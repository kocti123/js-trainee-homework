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

