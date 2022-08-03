// read file

import * as fs from 'fs';
console.log("before file operation");

// var file_content = "this is my 2nd file of fs module read file with the help of string ";

fs.readFile("data1.txt", (err, result) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("complet successfully" + result);
    }
});

console.log("after file ");