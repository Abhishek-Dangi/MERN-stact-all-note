// file stream module


import * as fs from 'fs';


var Content = "this is my content .......";

var writestream = fs.createWriteStream("data1.txt");
writestream.write(Content);
writestream.end();
writestream.on("finish", () => {
    console.log("content addded successfully.....");
})

writestream.on("error", (err) => {
    console.log(err);
})

console.log("after file operation");