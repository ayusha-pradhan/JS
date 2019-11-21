// same  property different value  

var obj1 = { name: "amar", age: 15, class: 10}
var obj2 = { name: "motina", age: 15}



const isObject = v => v && typeof v === 'object';

function getDifference(a, b) {
    return Object.assign(...Array.from(new Set([...Object.keys(a), ...Object.keys(b)]),
        k => ({ [k]: isObject(a[k]) && isObject(b[k])
            ? getDifference(a[k], b[k])
            : a[k] === b[k]
        })
    ));
}
console.log(getDifference(obj1, obj2));