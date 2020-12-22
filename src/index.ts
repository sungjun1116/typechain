interface Human {
  name: string,
  age: number,
  gender: string
}

const person = {
  name: "sungjun",
  gender: "male",
  age: 24
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`
}

console.log(sayHi(person));

export { };
