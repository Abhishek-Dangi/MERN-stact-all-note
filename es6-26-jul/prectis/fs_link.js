
// link module is call

// import { unlink } from 'fs';
// // import * as fs from 'fs';

// unlink('./data1.txt', (err) => {
//     console.log(err);
//     console.log("data2 is  link");
// });

import { link } from 'fs';
// import * as fs from 'fs';

link('./prectis/fs_link.js', 'data1.txt', (err) => {
    console.log(err);
    console.log("data2 is  link");
});
