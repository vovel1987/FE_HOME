//  Сравнить две константы двумя разными способами:
//  - Создать две константы, присвоив одной значение строкового типа, а второй числового
//  - Сравнить эти константы и вывести в консоль результат типа boolean так, чтобы
//  в одном случае ( == ) он был true, а в другом ( === ) false

// Second level: Реализовать решение задачи в JS:
//  - У нас есть 100 (создать константу)
//  - Цена помидоров на рынке - 10 (создать константу)
//  - Цена огурцов на рынке - 5 (создать константу)
//  - Цена яблок на рынке - 15 (создать константу)
//  - Оставшиеся деньги потратим на орехи (создать переменную)

// - Мы купили на рынке по два килограмма огурцов, помидоров и яблок (создать переменную)
// - оставшиеся деньги потратили на орехи (присвоить значение переменной)

// - сколько денег мы потратили на орехи? (вывести переменную в консоль)
// - на что мы потратили больше денег на орехи или остальное? (вывести boolean значение в консоль)

// - в зависимости от того потратили ли мы на орехи больше времени чем на всё остальное
// выводите в консоль сообщение об этом 'Больше потратили на орехи' или 'Больше потратили на фрукты и овощи'

const numValue = 10;
const stringValue = "10";
console.log(numValue === stringValue);
console.log(numValue == stringValue);

const totalSumme = 100;
const priceTomate = 10;
const priceCucumber = 10;
const priceApple = 15;
let restMoneyNuts;
let sumPurchases = priceTomate * 2 + priceCucumber * 2 + priceApple * 2;
console.log(sumPurchases);
restMoneyNuts = totalSumme - sumPurchases;
console.log(restMoneyNuts);
console.log(sumPurchases > restMoneyNuts);
if (sumPurchases > restMoneyNuts) {
  console.log("Больше потратили на фрукты и овощи");
} else {
  console.log("Больше потратили на орехи");
}

let num1 = +prompt("Vvedite chislo");
let num2 = +prompt("Vvedite 2 chislo");

alert(" ${num1+num2},${num1-num2}");

let numA = 5;
let numB = 5;

if (numB / 2 == 0) {
  console.log("Chetnoe chislo");
} else {
  console.log("nechetnoe chislo");
}

if (numA / 2 == 0) {
  console.log(numA);
} else {
  console.log(numA + 1);
}
