// find similar and different property of an array

var obj1 = { a: 2, b: 8,c: 4 }
var obj2 = { a: 2, b: 6, c: 4},
    
similar = Object.keys(obj1).filter(k => obj1[k] == obj2[k]);
// console.log(similar);

difference = Object.keys(obj1).filter(k => obj1[k] !== obj2[k]);
// console.log(difference);

console.log(Object.keys(obj1))
// var obj = [
//     { key : 'SomeKey'     , value : 'foo' },
//     { key : 'SomeKey'     , value : 'bar' },
//     { key : 'SomeOtherKey', value : 'baz' }
// ];

// values = [];
// for (var i = 0; i < obj.length; i++)
// {
//     if (obj[i].key === 'SomeKey')
//     {
//         values.push(obj[i].value);
//     }
// }

// console.log(values);