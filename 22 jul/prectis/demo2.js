
console.log("before excution of function ");
function demo() {
    console.log("demo envoke ");

}
function demo1() {
    console.log("demo1 is envoke");

}
function demo2() {
    console.log("demo2 is envoke");
}
function demo3() {
    console.log("demo3 is envoke");
}
function demo4() {
    console.log("demo4 is envoke")
}
setInterval(demo, 2000);
setInterval(demo1, 1000);
setInterval(demo2, 1000);
setInterval(demo3, 2000);
setInterval(demo4, 1000);

console.log("last statment is writern");