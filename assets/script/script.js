"use strict";

// Создайте пустой массив с именем numbers
let numbers = [];
let clonNumbers = [];

// Заполните массив numbers целыми числами от -10 до 10 (включительно) с помощью цикла.
for (let i = -10; i < 11; i++) {
  numbers.push(Number(i));
}
console.log(`Заполните массив целыми числами от -10 до 10: ${numbers}`);

// Используя циклы, выполните следующие операции над массивом numbers:
// Удалите все отрицательные числа из массива
let i = 0;
while (i < numbers.length) {
  if (numbers[i] >= 0) {
    clonNumbers.push(Number(numbers[i]));
  }
  i++;
}
numbers = Array.from(clonNumbers);
console.log(`Удалите все отрицательные числа из массива: ${numbers}`);

// Возведите каждое число в квадрат
i = 0;
clonNumbers = [];
while (i < numbers.length) {
  const currentElement = numbers[i];
  clonNumbers.push(Number(currentElement * currentElement));

  i++;
}
numbers = Array.from(clonNumbers);
console.log(`Возведите каждое число в квадрат: ${numbers}`);

// Отсортируйте числа в порядке убывания
numbers.sort(function (a, b) {
  return b - a;
});
console.log(`Отсортируйте числа в порядке убывания: ${numbers}`);
// Выведите полученный массив numbers в консоль
