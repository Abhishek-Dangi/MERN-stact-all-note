console.log("before excution");

function demo(a, b, cb) {
    var c = a + b;
    setTimeout(() => {
        cb(c)
    }, 3000)
}

var a = 300, b = 400;
demo(a, b, (result) => {
    console.log("result in callback" + result);
});
console.log("after exuction");