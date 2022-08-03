// fs module write file
import * as fs from 'fs';
console.log("before file  operation ");

var file_contant = "this is my first fs module file ";

fs.writeFile("data1.txt", file_contant, () => {
    console.log("creating successfuly")
})

// fs.writeFileSync("data1.txt", file_contant);
// console.log("file creating successfuly ");


console.log("file operation ");
