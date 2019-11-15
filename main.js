var array = [1, 2, 3, 5, 5];
        var sum = array.reduce(function(a, b){return a + b;}, 0);
        var product = array.reduce(function(a, b){return a * b;}, 1);
 
    

    document.write("The Sum of array is:"+ sum);

    {"  "}
    document.write("The Product of array is:"+ product);
// const male= {name:"alex", age:23 };
// const female= {name:"alex", agee:23};

// function compare(a, b) {
// return JSON.stringify(a) === JSON.stringify(b);
// }
// compare(male, female);
// //  isEquivalent=(x, y)=> {


// // var xProps = Object.getOwnPropertyNames(x);
// // var yProps = Object.getOwnPropertyNames(y);


// // if (xProps.length != yProps.length) {
// //     return false;
// // }

// // for (var i = 0; i < xProps.length; i++) {
// //     var propName = xProps[i];


// //     if (x[propName] !== y[propName]) {
// //         return false;
// //     }
// // }


// //     return true;
// // }
// document.write(compare(male, female));
// console.log(male);
