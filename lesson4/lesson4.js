function concatStrings(str, separator) {
  let result = str;
  const sep = typeof separator === 'string' ? separator : '';
  return function concat(str) {
    if (typeof str !== 'string') return result;
    result = result + sep + str;
    return concat;
  };
}

class Calculator {
  constructor(x, y) {
    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      throw new Error('should be finite number');
    }
    
    this.x = x;
    this.y = y;
    
    this.setX = function (x) {
      if (!Number.isFinite(x)) throw new Error('');
      this.x = x;
    }.bind(this);
    
    this.setY = function (y) {
      if (!Number.isFinite(y)) throw new Error('');
      this.y = y;
    }.bind(this);
    
    this.logSum = function () {
      console.log(this.x + this.y);
    }.bind(this);
    
    this.logMul = function () {
      console.log(this.x * this.y);
    }.bind(this);
    
    this.logSub = function () {
      console.log(this.x - this.y);
    }.bind(this);
    
    this.logDiv = function () {
      if (this.y === 0) throw new Error('');
      console.log(this.x / this.y);
    }.bind(this);
  }
}

module.exports= {concatStrings, Calculator};
