let array1 = ["gvg", "hhjgjgj", "bjhhj"];
let array2 = [12, 3, 58, 9, -6];
let array3 = [true, false];

let newValueMassiv1 = (arr) => {
  let stringArray = arr[0];
  let newstring = [];
  let idx = 0;
  let maxnumber = arr[0];
  let idx1 = 0;
  let error = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > stringArray.length) {
      stringArray = arr[i];
      idx = arr.indexOf(stringArray);
      return newstring.concat(stringArray, idx);
    }

    if (arr[i] > maxnumber) {
      maxnumber = arr[i];
      idx1 = arr.indexOf(maxnumber);
      return newstring.concat(maxnumber, idx1);
    }
    if (typeof arr[i] === "boolean") {
      return error.concat("error", arr.length);
    }
  }
};
console.log(newValueMassiv1(array1));
console.log(newValueMassiv1(array2));
console.log(newValueMassiv1(array3));
