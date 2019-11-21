var item = {}
var items = [{id:2}, {id:2}, {id:2}];

let foundIndex = items.find(element => element.id === item.id)
items.splice(foundIndex, 1, item)
console.log(items)