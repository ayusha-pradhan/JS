// pop a number from array 

var array = ['1','2','3','4','5','6','7','8','9','10'];
document.write("the old array is \n"+array+"\n");
var remove = function(removeID){
    var index = array.indexOf(removeID);
    if (index>-1) {
        array.splice(index, 1);
    }
}
remove(prompt("Enter ID of the worker you wish to remove: "));
document.write("\n the new array is \n "+array);