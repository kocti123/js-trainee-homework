//Ситуация №1:
button.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('Microtask 1'));
  console.log('Listener 1');
});

button.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('Microtask 2'));
  console.log('Listener 2');
});

//1. обработчики событий добавляются в очередь макро задач в порядке создания
//2. берется первая микро задача и начинется ее выполнение
//3. внутри обработчика в очередь микро задач добавляется промис с console.log
//4. после чего в консоль выводится Listener 1
//5. потом выполняются все микро задачи в очереди
//6. в результате в консоль выводится Microtask 1
//7. текущая макро задача на этом завершается и берется следующая
//8. пункты 3-6 повторяются для второго обработчика 
//в результате порядок сообщений будет следующим:
//Listener 1
//Microtask 1
//Listener 2
//Microtask 2


//Ситуация №2:
button.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('Microtask 1'));
  console.log('Listener 1');
});

button.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('Microtask 2'));
  console.log('Listener 2');
});

button.click();

//click сразу синхронно выполняет оба обработчика в порядке создания
//без добавления обработчиков в очередь микро и макро задач
//после чего выполняются все микро задачи, созданные внутри обработчиков
//следовательно вывод такой:
//Listener 1
//Listener 2
//Microtask 1
//Microtask 2


//проверить, то что обработчики выполняются синхронно можно
//добавив промисы перед и после button.click:

Promise.resolve().then(() => console.log('Microtask 3'));
button.click();
Promise.resolve().then(() => console.log('Microtask 4'));

//в очередь микрозадач добавлется Microtask 3
//первый обработчик добавляет в очередь микрозадач Microtask 1 
//и выводит в консоль Listener 1
//эти шаги повторяются для второго обработчики 
//в очередь микрозадач добавляется Microtask 4
//стек вызовов очищается и начинается выполнения всех
//микрозадач в порядке их добавления в очередь
//вывод получается следующим:
//Listener 1
//Listener 2
//Microtask 3
//Microtask 1
//Microtask 2
//Microtask 4
