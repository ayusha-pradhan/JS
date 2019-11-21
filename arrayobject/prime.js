for (var i = 1; i <= 20; i++) {
    var a = false;
    for (var j = 2; j <= i; j++) {
       if (i%j===0 && j!==i) {
          a = true;
       }
    }
    if (a === false) {
       document.write("<br>"+i);
    }
 }