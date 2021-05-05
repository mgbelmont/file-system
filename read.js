const fs = require('fs')
fs.readFile('created.txt','utf8',(error,data)=>{
    if (error) throw error;
    console.log('leyendo el archivo: ',data);
   
})