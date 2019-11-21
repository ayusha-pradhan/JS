var obj = [
    {name: "ayu", age: 10},
    {name:"bina", age:20},
    {name: "catya", age: 30},
    {name: "dina", age: 40}
];



const newObj = obj.reduce((ds, d) => {
 let arr = obj.reverse().map(obj => obj.age); 
console.log(arr)
 {
 newD = {...d, age: arr};

}
 return ds.concat(newD);
}, []);

console.log(newObj)