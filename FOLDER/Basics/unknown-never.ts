// UNKNOWN TYPE
let userInput: unknown;
let userName: string;

userInput = 4;
userInput = "Hemang";

// userName = userInput; //ERROR
// we wont get this error is userInput was of ANY TYPE

// type checking or narrowing
if (typeof userInput === "string") {
  userName = userInput;
}

// NEVER TYPE

const neverType = (n1: number, n2: number): never => {
  throw new Error("ERROR OCCURED");
  while (true) {} //unreachable
};

console.log(neverType(34, 56));
