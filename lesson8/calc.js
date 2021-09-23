window.addEventListener("load", function () {
  "use strict";
  const calc = document.getElementById("calc");
  const input = document.getElementById('input');
  const result = document.getElementById('output');

  let state = new Calculator();
  input.value = state.toString();
  calc.addEventListener("click", function (e) {
    if (e.target.nodeName !== "BUTTON") return;

    const action = e.target.dataset.action;
    const type = e.target.dataset.type;

    state.handleInput(type, action);

    state.result = state.calculate();

    input.value = state.toString();
    result.value = state.result ?? '';
  });
  document.addEventListener('keydown', function (e) {
    if ('0987654321.'.includes(e.key)) {
      state.handleInput('number', e.key);
    } else if ('/*-+'.includes(e.key)) {
      state.handleInput('action', e.key);
    } else if (e.key === 'Backspace') {
      state.handleInput('back');
    } else if (e.key === 'Enter') {
      state.handleInput('solve');
    } else if (e.key === 'Delete') {
      state.handleInput('clear');
    }

    state.result = state.calculate();

    input.value = state.toString();
    result.value = state.result ?? '';
  });
});

class Calculator {
  #actions = {
    '+': (a, b) => +a + +b,
    '-': (a, b) => +a - +b,
    '*': (a, b) => +a * +b,
    '/': (a, b) => +a / +b,
  }

  constructor(firstNumber, secondNumber, action) {
    this.firstNumber = firstNumber ?? '0';
    this.secondNumber = secondNumber ?? '';
    this.action = action ?? '';
    this.result = '';
  }

  calculate() {
    if (
      this.action === '/' &&
      (this.firstNumber === '0' ||
        this.secondNumber === '0')
    ) {
      return '';
    }
    if (this.secondNumber.length > 0) {
      const res = this.#actions[this.action](this.firstNumber, this.secondNumber)
      return this.#round(res);
    }
    return this.result;
  }

  handleInput(type, action) {
    switch (type) {
      case ("number"):
        this.#addToNumber(action);
        break;
      case ("action"):
        this.#addAction(action);
        break;
      case ("rev"):
        this.#reverse();
        break;
      case ('back'):
        this.#deleteChar();
        break;
      case ('solve'):
        this.#solve();
        break;
      case ('clear'):
        this.firstNumber = '0';
        this.secondNumber = '';
        this.action = '';
        this.result = '';
        break;
    }
  }

  #addToNumber(partToAdd) {
    const num = this.#lastNumber();
    if (this[num].length < 1 && partToAdd === '.') return;
    if (partToAdd === '.' && this[num].includes('.')) return;

    if (this[num] === '0' && partToAdd !== '.') this[num] = partToAdd;
    else this[num] = this[num] + partToAdd;
  }

  #addAction(action) {
    if (this.secondNumber.length > 0) {
      this.#solve();
      this.action = action;
    } else if (
      this.firstNumber.length > 0 &&
      this.secondNumber.length === 0
    ) {
      this.action = action;
    }
  }

  #reverse() {
    const num = this.#lastNumber();
    if (this[num].length === 0) return;
    this[num] = (-+this[num]).toString();
  }

  #deleteChar() {
    if (this.secondNumber.length > 0) {
      this.secondNumber = this.secondNumber.slice(0, this.secondNumber.length - 1)
    } else if (this.action.length > 0) {
      this.action = ''
    } else if (this.firstNumber.length > 0) {
      this.firstNumber = this.firstNumber.slice(0, this.firstNumber.length - 1)
    }
    if (this.firstNumber === '-') this.firstNumber = '';
    if (this.secondNumber === '-') this.secondNumber = '';
  }

  #solve() {
    if (this.secondNumber.length > 0) {
      this.firstNumber = this.calculate();
      this.secondNumber = '';
      this.action = '';
      this.result = '';
    }
  }

  #lastNumber() {
    if (this.action.length === 0) {
      return 'firstNumber';
    } else {
      return 'secondNumber';
    }
  }

  #round(number) {
    return (+number).toFixed(8).replace(/\.?0+$/, '');
  }

  toString() {
    return `${this.firstNumber ?? ''}${this.action ?? ''}${this.secondNumber ?? ''}`;
  }
}
