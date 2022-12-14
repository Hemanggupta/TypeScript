const add = (n1: number, n2: number) => n1 + n2;

const printResult = (num: number) => {
  console.log("Result: " + num);
  return; //just "return" returns undefined
};

printResult(add(5, 6));
console.log(printResult(add(5, 6))); //prints result and undefine

// FUNCTION TYPE

let combineFunctions: (a: number, b: number) => number;

combineFunctions = add;

console.log(combineFunctions(34, 43));

// combineFunctions = printResult; //error

// CALLBACK

function combineAndHandle(
  n1: number,
  n2: number,
  callback: (num: number) => void
) {
  const result = n1 + n2;
  callback(result);
}

combineAndHandle(34, 56, printResult);
