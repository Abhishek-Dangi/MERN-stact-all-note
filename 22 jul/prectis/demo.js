console.log("Before excution of statement ");
function demo() {
    console.log("demo function is envoke");
}
function demo1() {
    console.log("demo1 function is envoke ");
}
function demo2() {
    console.log("demo2 function is envoke");
}
setTimeout(demo, 2000);
setTimeout(demo1, 1000);
setTimeout(demo2, 3000);
console.log("afer the excution of statement");