var obj = [
    {name: "ayu", age: 10},
    {name:"bina", age:20},
    {name: "catya", age: 30},
    {name: "dina", age: 40}
];

// console.log(obj.reverse().map(a=>a.age))for (i=0;i<4;i++)

const arr = (obj.reverse().map(obj => obj.age)); 

console.log(arr)
console.log(obj)
const newObj = obj.reduce((ds, d) => {
    newD = {...d, age:arr};
 
    return ds.concat(newD);
 }, []);

console.log(newObj)

// const arrayReverseObj = (obj) => {
//     let newArray = []
  
    // Object.keys(obj).reverse().forEach(key => {newArray.push( {'age':obj[key].age})})
  
//     console.log(newArray)
//     return newArray  
//   }
// arrayReverseObj(obj)


// console.log(obj)


  
  