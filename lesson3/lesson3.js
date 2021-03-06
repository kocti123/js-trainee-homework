Array.prototype.myFilter = function (callback, thisArg) {
  const res = [];
  Array.prototype.forEach.call(this, (element, index, array) => {
    if (callback.call(thisArg, element, index, array)) {
      res.push(element);
    }
  });
  return res;
}

function createDebounceFunction(func, delay) {
  let timerId;
  return function () {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(func, delay);
  };
}

