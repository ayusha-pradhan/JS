var people = [
    {name: "ayu", age: 30},
    {name:"ana", age:45},
    {name: "namita", age: 20}
  ];

 people.find(a=>a.name==="ana").name = "";

 console.log(people)
//   function replace(a){
//       if (a.name==="ana")
//       return a.name==="";
//   }

  