let typeValue = function (a) {
    if (typeof a === "string") return a.length;
  
    if (typeof a === "number") return String(a).length;
  
    if (typeof a === "boolean") return String(a).length;
  
    return "error";
  };
  
  console.log(typeValue("hello"));
  console.log(typeValue(5));
  console.log(typeValue(typeof "hello" === "number"));
  console.log(typeValue());
  
  function typeValue1(a) {
    if (typeof a === "string") return a.length;
  
    if (typeof a === "number") return String(a).length;
  
    if (typeof a === "boolean") return String(a).length;
  
    return "error";
  }
  
  console.log(typeValue1("yes"));
  
  let arrowFn = (a) => {
    if (typeof a === "string") return a.length;
  
    if (typeof a === "number") return String(a).length;
  
    if (typeof a === "boolean") return String(a).length;
  
    return "error";
  };
  console.log(arrowFn(6));
  
  // В принципе все функции одинаковые по  своему синтаксису.Конечно Arrowfunction короче по своей записи можно ее использовать.