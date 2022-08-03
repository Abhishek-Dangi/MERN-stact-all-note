
// function add(...args) {

//     var s = 0;
//     for (let x of args)
//         s += x;
//     console.log("addition of arguments =" + s);

// }




// add(29, 23);
// add(12, 39, 20)

// using this we pass multiple arguments at the same function name

function add(...args) {
    var s = 0;
    for (let x of args)
        s += x;
    console.log("addition of arrguments are: " + s);
}


add(12, 23);
add(12, 23, 24);
add(10, 20, 30, 40);
add(14, 12, 32, 43, 12);
