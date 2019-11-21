// sort array of object based on ascending age


var people = [
    {name: "ayu", age: 30},
    {name:"ana", age:45},
    {name: "namita", age: 20}
];

function acsSort(property) { 
    return function (a,b) {
        return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    }
}

console.log(people.sort(acsSort("age")));

