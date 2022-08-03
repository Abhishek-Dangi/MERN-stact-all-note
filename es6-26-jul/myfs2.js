//fs module

import * as fs from 'fs';
//import fs from 'fs';

console.log("Before file operation");

/*fs.appendFileSync("data.txt",file_content);
console.log("Content added successfully....");*/

fs.readFile("data.txt",(err,result)=>{
    if(err)
     console.log(err);
    else
    {
     console.log("Content read successfully....");
     //console.log(result.toString());
     console.log("File content : "+result);
    }    
});

console.log("After file operation");
