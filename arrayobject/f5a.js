var obj = [
    {name: "ayu", age: 10},
    {name:"bina", age:20},
    {name: "catya", age: 30},
    {name: "dina", age: 40}
];


console.log(obj)

var arr = obj.slice().reverse()

newArr = []
for(var key in obj){
   newArr.push(obj[key].age)
 };

 for(var key in arr){
  arr[key].age=newArr[key]
};


console.log(arr)

