type Combinable = number | string;

const combine = (input1: Combinable, input2: Combinable): Combinable => {
  let result: Combinable;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
    result = result.toString(); //number into string
  } else {
    result = input1.toString() + " " + input2.toString();
  }
  return result;
};

const combinedAges = combine(310, 26);
console.log(combinedAges);
const combinedNames = combine("Hemang", "Gupta");
console.log(combinedNames);

//Literals
type Names = "Hemang" | "Gupta";
let litteral: Names;

litteral = "Hemang";
litteral = "Gupta";
// litteral = "Mohit"; //error
