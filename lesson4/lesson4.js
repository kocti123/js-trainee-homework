function concatStrings(str, separator) {
  let result = [str];
  const sep = typeof separator === 'string' ? separator : '';
  return function concat(str) {
    if (typeof str !== 'string') return result.join(sep);
    result = [...result, str];
    return concat;
  };
}

function Calculator(x, y) {
  if (!Number.isFinite(x) || !Number.isFinite(y)) {
    throw new Error('should be finite number');
  }

  this.x = x;
  this.y = y;

  this.setX = function (x) {
    if (!Number.isFinite(x)) throw new Error('');
    this.x = x;
  };

  this.setY = function (y) {
    if (!Number.isFinite(y)) throw new Error('');
    this.y = y;
  };

  this.logSum = function () {
    console.log(this.x + this.y);
  };

  this.logMul = function () {
    console.log(this.x * this.y);
  };

  this.logSub = function () {
    console.log(this.x - this.y);
  };

  this.logDiv = function () {
    if (this.y === 0) throw new Error('');
    console.log(this.x / this.y);
  };

  this.setX = this.setX.bind(this);
  this.setY = this.setY.bind(this);
  this.logSum = this.logSum.bind(this);
  this.logMul = this.logMul.bind(this);
  this.logSub = this.logSub.bind(this);
  this.logDiv = this.logDiv.bind(this);
}

export { concatStrings, Calculator };
