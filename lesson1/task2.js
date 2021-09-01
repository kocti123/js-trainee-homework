function sumAndDivide() {
  const num1 = +prompt('Enter first number');
  const num2 = +prompt('Enter secong number');
  if (
    Number.isNaN(num2) || Number.isNaN(num1) ||
    num2 === 0
  ) {
    console.log('Некорректный ввод!');
  } else {
    console.log(`${num1 + num2} ${num1 / num2}`);
  }
}
