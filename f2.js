// access a specific property of an array ("in this case name")  

var array = [ { name: "ayu", bar: 2}, { name: "alex", bar: 4}, { name: "ana", bar: 6} ];

function getFields(input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}

let result = array.map(a => (a.name));
 console.log(array);
console.log(result);