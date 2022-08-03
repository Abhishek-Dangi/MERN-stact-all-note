// function add(...args) {
//     var s = 0;
//     for (let x of args)
//         s += x;
//     console.log("add = " + s);
// }
// add(10, 29);
// add(19, 23, 23);
// add(100, 20);
// add(20, 30);



function add(...a) {
    var s = 0;
    for (let x of a)
        s += x;
    // console.log("elements = " + a);
    console.log("add = " + s);
    return a;
}
add(10, 20, 30, 40, 50);
add(12, 12, 12);
var ab = add(12, 34, 43);
console.log(ab);