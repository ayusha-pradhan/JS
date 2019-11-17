// min & max age of array object

var people = [
    {name: "ayu", age: 30},
    {name:"ana", age:45},
    {name: "namita", age: 20}
];
 
// // Sort by age descending 
 
// list.sort(function(a, b) {
//     return b.age - a.age
// })

// console.log(list[0])

var min = Math.min.apply(null, people.map(function(a){return a.age;}))
   ,max = Math.max.apply(null, people.map(function(a){return a.age;}))

   console.log("min age:"+min)
   console.log("max age:"+max)
