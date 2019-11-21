var item = [
    {name:"laptop", number:1, brand:"lenevo"},
    {name:"mobile", number:2, brand:"samsung"},
    {name:"pen", number:10, brand:"marko"}
];

function getItem(key,myitem){
    for (var i=0;i < myitem.length;i++){
        if (myitem[i].number === key)
            return myitem[i];
    }
};
console.log(Object.keys(item))
var result = getItem(10,item);
console.log(result);






















































































