// Напишите функцию, которая поверхностно сравнивает два объекта.
// Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true

const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };
// console.log(isEqual(data, data2)); // true
// console.log(isEqual(data, data3)); // false

function areEqualShallow(a, b) {
  for (var key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}
console.log(areEqualShallow(data, data2));

// 2)
// Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.

const objectA = { a: 1, b: 2, j: 2 };
const objectB = { c: 1, b: 2, j: 3 };
// console.log(intersection(data, data2)); // { b: 2 }

function intersection(objectA, objectB) {
  let newInterscetion = [];
  for (const key in objectA) {
    if (objectA[key] === objectB[key]) {
      newInterscetion.push(objectA[key], objectB[key]);
      // console.log(newInterscetion, objectA[key], objectB[key]);
    }
  }

  return newInterscetion;
}
console.log(intersection(objectA, objectB));
