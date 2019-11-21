// access a specific property of an array ("in this case name")  

var array = [ { name: "ayu", bar: 2}, { name: "alex", bar: 4}, { name: "ana", bar: 6} ];

 result = array.filter(
    (a => a.name==="ana")
    )

// let result = array.filter((a) => {return a.name==="ana";}).map((a) =>{return a.bar * 2;});


console.log(array)  
console.log(result);



