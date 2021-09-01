function changeBase() {
  const number = +prompt('Введите число');
  const base = +prompt('Введите новое основание числа');
  if (
    Number.isNaN(base) || Number.isNaN(number) ||
    base > 36 || base < 2
  ) {
    console.log('Некорректный ввод!');
  } else {
    console.log(number.toString(base));
  }
}
