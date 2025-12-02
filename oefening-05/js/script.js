let persons = [
  {
    name: "gert",
    age: 20,
  },
  {
    name: "david",
    age: 70,
  },
  {
    name: "andie",
    age: 93,
  }, 
  {
    name: "philippe",
    age: 16
  }
];

let sorted = [...persons];
sorted.sort((personA, personB) => {
  if (personA.age > personB.age) {
    return -1;
  } else if (personA.age === personB.age) {
    return 0;
  } else {
    return 1;
  }
});
console.log(persons);
console.log(sorted);