// delete specific index of an array

var people = [
  {name: "ayu", age: 30},
  {name:"ana", age:45},
  {name: "namita", age: 20}
];

people.splice(people.findIndex(item => item.name === "ana"), 1);
console.log(people);