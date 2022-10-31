let arr = [5, 3, 8, 1];

let filtered = (arr, a, b) => {
  let filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
};
console.log(filtered(arr, 1, 4));

function newArray(array, a, b) {
  let filterArray = [];
  return (filterArray = arr.filter((item) => item >= a && item <= b));
}
console.log(newArray(arr, 1, 4));




let chancedArray = (arr, a, b) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= a || arr[i] >= b) {
      console.log(arr.splice(i, 1));
    }
  }
  return arr;
};
console.log(chancedArray(arr, 1, 4));
