console.log("before excution of program");

function demo(a, b, cb) {
    var c = a + b;
    cb(c);

}

var a = 100;
var b = 300;
demo(a, b, (result) => {
    console.log(" callback result " + result)
});

console.log("after excution ");