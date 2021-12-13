 const fs = require('fs/promises');

 fs.readFile('./text.txt','utf-8').then((req1)=>{
    fs.readFile(req1.trim(),'utf-8').then((req2)=>{
        console.log(req2);
    })
 })