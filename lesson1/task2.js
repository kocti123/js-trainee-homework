function sumAndDivide() {
  const num1 = +prompt('Enter first number');
  if (Number.isNaN(num1)) {
    console.log('Некорректный ввод!');
    return;
  }

  const num2 = +prompt('Enter secong number');
  if (Number.isNaN(num2) || num2 === 0) {
    console.log('Некорректный ввод!');
    return;
  }

  console.log(`${num1 + num2} ${num1 / num2}`);
}
