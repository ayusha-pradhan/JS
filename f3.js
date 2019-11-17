var a= [
    {name: "ayu", age: 30},
    {name:"ana", age:45},
    {name:"rita", age:23}]
var b =[{name:"ramee", age:45},
    {name: "namita", age: 20},
    {name: "anup", age:42}
];

var result = a.filter(function(o1){
   
    return b.some(function(o2){
        return o1.age === o2.age;          
    });
})
  
  console.log(result)

  var result1 = b.filter(function(o1){
   
    return a.some(function(o2){
        return o1.age === o2.age;          
    });
})

console.log(result1)