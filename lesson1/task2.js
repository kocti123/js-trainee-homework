function sumAndDivide() {
  const num1 = +prompt('Введите первое число');
  if (Number.isNaN(num1)) {
    console.log('Некорректный ввод!');
    return;
  }

  const num2 = +prompt('Введите второе число');
  if (Number.isNaN(num2) || num2 === 0) {
    console.log('Некорректный ввод!');
    return;
  }

  console.log(`${num1 + num2} ${num1 / num2}`);
}
