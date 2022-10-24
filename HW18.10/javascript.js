function camelize(string) {
  let stringNew = string.split("-");
  for (let i = 0; i < stringNew.length; i++) {
    stringNew[i] = stringWithUppercase(stringNew[i]);
  }
  let joinString = stringNew.join("");
  return joinString;
}

function stringWithUppercase(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}
console.log(camelize("my-short-string"));
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

let array = [1, -2, 3, 4, -9, 6];
let newArrays = function (array) {
  let positivNumber = 0;
  let positivArray = [];
  let negativNumber = 0;
  let negativArray = [];
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positivNumber += array[i];
      positivArray = [positivNumber];
    }
    if (array[i] < 0) {
      negativNumber += array[i];
      negativArray = [negativNumber];
    }
  }
  newArray = positivArray.concat(negativArray);

  return newArray;
};
console.log(newArrays(array));
