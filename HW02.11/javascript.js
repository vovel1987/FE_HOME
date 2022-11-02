// Подсчёт количества свойств объекта
// Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: "John",
  age: 30,
};

function count(object) {
  return Object.entries(object);
}
console.log(count(user));

// 2)
// Максимальная зарплата
// У нас есть объект salaries с зарплатами:

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
let newSalary = {};

function maxValue(obj) {
  let maxSalary = 0;
  for (const key in obj) {
    if (maxSalary < obj[key]) {
      maxSalary = obj[key];
    }
  }
  return maxSalary;
}
console.log(maxValue(salaries));
console.log(maxValue(newSalary));

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
