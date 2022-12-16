// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//   const result = n1 + n2;
//   if (showResult) console.log(phrase + result);
//   else return result;
// }

const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
  const result = n1 + n2;
  if (showResult) console.log(phrase + result);
  else return result;
};

const n1 = 4511;
const n2 = 10.9;
const bool = true; //bool
const resultphrase = "Result is : "; //str

add(n1, n2, bool, resultphrase);
