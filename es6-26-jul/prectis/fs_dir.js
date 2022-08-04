// make  directry

import { mkdir } from 'fs';

mkdir('./abhidangi', {}, (err) => {
    console.log(err);
});

