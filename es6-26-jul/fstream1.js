//file stream : readable

import * as fs from 'fs';

console.log("Before file operation");

var readstream = fs.createReadStream("data2.txt");

var file_content="";
readstream.on("data",(chunk)=>{
 file_content+=chunk;
})

readstream.on("end",()=>{
 console.log(file_content);
})

readstream.on("error",(err)=>{
 console.log(err);
})

console.log("After file operation");
