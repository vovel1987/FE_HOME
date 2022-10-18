
let newString = function (string) {
    let stringNew = string.split("-");
    console.log(stringNew);
    let stringJoin = stringNew
      .join("")
      .replace("short", "Short")
      .replace("string", "String");
    return stringJoin;
  };
  console.log(newString("my-short-string"));
  
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
  