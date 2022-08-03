//callback : Asynchronous with arguments
console.log("Before function execution");

function add(a, b, cb) {
    var c = a + b;
    //cb(c);
    setTimeout(() => {
        cb(c);
    }, 3000);
}

var a, b;
a = 100;
b = 200;
add(a, b, (result) => {
    console.log("Callback function execution , add = " + result);
});

console.log("After function execution");


