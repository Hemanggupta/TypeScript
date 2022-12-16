enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  // role: [number, string];
  role: Role;
} = {
  // const person = {
  //dont need for type coz "type inference"
  name: "Hemang",
  age: 22,
  hobbies: ["volleyball", "gaming", "anime", "coding"],
  // role: [1, "Executor"],
  role: Role.READ_ONLY,
};

console.log(person.name);
// console.log(person.nickname);
console.log(person);
console.log(person.role);
