 const fs = require('fs/promises');

 fs.readFile('./text.txt','utf-8').then((req)=>{
    console.log(req);
 })