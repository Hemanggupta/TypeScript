let Uname = "Hemang";
{
	let Uname = "Gupta";
}
console.log(Uname);

// Arrow function
const add = (num1: number, num2: number) => num1 + num2;

const sum: (a: number, b: number) => void = (a, b = 5) => console.log(a + b);

sum(5, 5);
