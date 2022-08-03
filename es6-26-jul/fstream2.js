//file stream : duplex

import * as fs from 'fs';

console.log("Before file operation");

var readStream = fs.createReadStream("data2.txt");
var writeStream = fs.createWriteStream("data3.txt");

readStream.pipe(writeStream);
console.log("It works");

console.log("After file operation");
